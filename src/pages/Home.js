import { moviesApi, seriesApi } from "../api/api";
import FadeCarousel from "../components/Carousel";
import MovieCard from "../components/MovieCard";
import SectionView from "../components/SectionView";
import { useMovies, useView } from "../hooks/personalHooks";

const Home = ({ imageUrl }) => {
  const { popular: popularMovies } = moviesApi;
  const { popular: popularSeries } = seriesApi;

  const [popularMoviesData] = useMovies(1, popularMovies);
  const [popularSeriesData] = useMovies(1, popularSeries);

  let popularMoviesResults = [],
    popularSeriesResults = [];
    
  if (popularMoviesData) {
    popularMoviesResults = popularMoviesData.results;
  }

  if (popularSeriesData) {
    popularSeriesResults = popularSeriesData.results;
  }

  const [popularMoviesViewLess, popularMoviesViewMore, popularMoviesLimit] =
    useView(5, popularMoviesResults);
  const [popularSeriesViewLess, popularSeriesViewMore, popularSeriesLimit] =
    useView(5, popularSeriesResults);

  return (
    <>
      <FadeCarousel imageUrl={imageUrl} />
      <SectionView
        title="Top 20 des films les plus populaires"
        viewMore={popularMoviesViewMore}
        viewLess={popularMoviesViewLess}
      >
        {popularMoviesResults
          .slice(0, popularMoviesLimit)
          .map(({ title, vote_average, poster_path, release_date }, index) => {
            return (
              <MovieCard
                title={title}
                vote_average={vote_average}
                poster_path={poster_path}
                release_date={release_date}
                key={index}
                imageUrl={imageUrl}
              />
            );
          })}
      </SectionView>
      <SectionView
        title="Top 20 des séries les plus populaires"
        viewMore={popularSeriesViewMore}
        viewLess={popularSeriesViewLess}
      >
        {popularSeriesResults
          .slice(0, popularSeriesLimit)
          .map(({ name, vote_average, poster_path, first_air_date }, index) => {
            return (
              <MovieCard
                title={name}
                vote_average={vote_average}
                poster_path={poster_path}
                release_date={first_air_date}
                key={index}
                imageUrl={imageUrl}
              />
            );
          })}
      </SectionView>
    </>
  );
};

export default Home;

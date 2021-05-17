import { celebritiesApi, moviesApi, seriesApi } from "../api/api";
import FadeCarousel from "../components/Carousel";
import CelebrityCard from "../components/CelebrityCard";
import MovieCard from "../components/MovieCard";
import SectionView from "../components/SectionView";
import { useCelebrities, useMovies, useView } from "../hooks/personalHooks";

const Home = ({ imageUrl }) => {
  const { popular: popularMovies } = moviesApi;
  const { popular: popularSeries } = seriesApi;
  const { popular: popularCelebrities } = celebritiesApi;

  const [popularMoviesData] = useMovies(1, popularMovies);
  const [popularSeriesData] = useMovies(1, popularSeries);
  const [popularCelebritiesData] = useCelebrities(1, popularCelebrities);

  let popularMoviesResults = [],
    popularSeriesResults = [],
    popularCelebritiesResults = [];

  if (popularMoviesData) {
    popularMoviesResults = popularMoviesData.results;
  }

  if (popularSeriesData) {
    popularSeriesResults = popularSeriesData.results;
  }

  if (popularCelebritiesData) {
    popularCelebritiesResults = popularCelebritiesData.results;
  }

  const [popularMoviesViewLess, popularMoviesViewMore, popularMoviesLimit] =
    useView(5, popularMoviesResults);
  const [popularSeriesViewLess, popularSeriesViewMore, popularSeriesLimit] =
    useView(5, popularSeriesResults);
  const [
    popularCelebritiesViewLess,
    popularCelebritiesViewMore,
    popularCelebritiesLimit,
  ] = useView(5, popularCelebritiesResults);

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
      <SectionView
        title="Top 20 des personnes célèbres"
        viewLess={popularCelebritiesViewLess}
        viewMore={popularCelebritiesViewMore}
      >
        {popularCelebritiesResults
          .slice(0, popularCelebritiesLimit)
          .map(({ profile_path, name }, index) => {
            return (
              <CelebrityCard
                key={index}
                profile_path={profile_path}
                name={name}
                imageUrl={imageUrl}
              />
            );
          })}
      </SectionView>
    </>
  );
};

export default Home;

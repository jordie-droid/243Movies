import { celebritiesApi, moviesApi, seriesApi } from "../api/api";
import FadeCarousel from "../components/Carousel";
import CelebrityCard from "../components/CelebrityCard";
import MovieCard from "../components/MovieCard";
import SectionView from "../components/SectionView";
import SectionViewSkeleton from "../components/SectionViewSkeleton";
import SerieCard from "../components/SerieCard";
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
      {window.scrollTo(0, 0)}
      <FadeCarousel imageUrl={imageUrl} />
      {popularMoviesData ? (
        <>
          {popularMoviesResults.length > 0 && (
            <SectionView
              title="Top 20 des films les plus populaires"
              viewMore={popularMoviesViewMore}
              viewLess={popularMoviesViewLess}
              limit={popularMoviesLimit}
              length={popularMoviesResults.length}
            >
              {popularMoviesResults
                .slice(0, popularMoviesLimit)
                .map(
                  (
                    { id, title, vote_average, poster_path, release_date },
                    index
                  ) => {
                    return (
                      <MovieCard
                        id={id}
                        title={title}
                        vote_average={vote_average}
                        poster_path={poster_path}
                        release_date={release_date}
                        key={index}
                        imageUrl={imageUrl}
                      />
                    );
                  }
                )}
            </SectionView>
          )}
        </>
      ) : (
        <SectionViewSkeleton title="Top 20 des films les plus populaires" />
      )}
      {popularSeriesData ? (
        <>
          {popularSeriesResults.length > 0 && (
            <SectionView
              title="Top 20 des séries les plus populaires"
              viewMore={popularSeriesViewMore}
              viewLess={popularSeriesViewLess}
              limit={popularSeriesLimit}
              length={popularSeriesResults.length}
            >
              {popularSeriesResults
                .slice(0, popularSeriesLimit)
                .map(
                  (
                    { id, name, vote_average, poster_path, first_air_date },
                    index
                  ) => {
                    return (
                      <SerieCard
                        id={id}
                        title={name}
                        vote_average={vote_average}
                        poster_path={poster_path}
                        release_date={first_air_date}
                        key={index}
                        imageUrl={imageUrl}
                      />
                    );
                  }
                )}
            </SectionView>
          )}
        </>
      ) : (
        <SectionViewSkeleton title="Top 20 des séries les plus populaires" />
      )}
      {popularCelebritiesData ? (
        <>
          {popularCelebritiesResults.length > 0 && (
            <SectionView
              title="Top 20 des personnes célèbres"
              viewLess={popularCelebritiesViewLess}
              viewMore={popularCelebritiesViewMore}
              limit={popularCelebritiesLimit}
              length={popularCelebritiesResults.length}
            >
              {popularCelebritiesResults
                .slice(0, popularCelebritiesLimit)
                .map(({ id, profile_path, name }, index) => {
                  return (
                    <CelebrityCard
                      id={id}
                      key={index}
                      profile_path={profile_path}
                      name={name}
                      imageUrl={imageUrl}
                    />
                  );
                })}
            </SectionView>
          )}
        </>
      ) : (
        <SectionViewSkeleton title="Top 20 des personnes les plus célèbres" />
      )}
    </>
  );
};

export default Home;

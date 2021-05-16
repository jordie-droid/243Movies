import { useState } from "react";
import { moviesApi } from "../api/api";
import FadeCarousel from "../components/Carousel";
import MovieCard from "../components/MovieCard";
import Section from "../components/Section";
import { useMovies } from "../hooks/personalHooks";

const Home = ({ imageUrl }) => {
  const { popular } = moviesApi;

  const [data] = useMovies(1, popular);
  const [limit, setLimit] = useState(5);
  let results = [];
  if (data) {
    results = data.results;
    console.log(results);
  }

  const viewMore = () => {
    setLimit((prevValue) => prevValue + 5);
    limit > results.length && setLimit(results.length);
  };

  const viewLess = () => {
    setLimit((prevValue) => prevValue - 5);
    limit < results.length && setLimit(5);
  };

  return (
    <>
      <FadeCarousel imageUrl={imageUrl} />
      <Section
        title="Top 20 des films les plus populaires"
        viewMore={viewMore}
        viewLess={viewLess}
      >
        {results
          .slice(0, limit)
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
      </Section>
    </>
  );
};

export default Home;

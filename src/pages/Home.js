import { moviesApi } from "../api/api";
import FadeCarousel from "../components/Carousel";
import MovieCard from "../components/MovieCard";
import Section from "../components/Section";
import { useMovies } from "../hooks/personalHooks";

const Home = ({ imageUrl }) => {
  const { popular } = moviesApi;

  const [data] = useMovies(1, popular);
  let results = [];
  if (data) {
    results = data.results;
  }

  return (
    <>
      <FadeCarousel imageUrl={imageUrl} />
      <Section title="Top 20 des films les plus populaires">
        {results.map(({ title, vote_average, poster_path }, index) => {
          return (
            <MovieCard
              title={title}
              vote_average={vote_average}
              poster_path={poster_path}
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

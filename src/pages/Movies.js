import { useState } from "react";
import { moviesApi } from "../api/api";
import Link from "../components/Link";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import {
  GenresContainer,
  MoviesContainer,
} from "../components/styles/Movies.style";
import { useGenres, useMovies } from "../hooks/personalHooks";

const Movies = ({ imageUrl }) => {
  const { genres: genresUrl, all: allMoviesUrl } = moviesApi;
  const [currentPage, setCurrentPage] = useState(1);

  const [genres] = useGenres(genresUrl);
  const [moviesData] = useMovies(currentPage, allMoviesUrl);

  let moviesGenres = [],
    moviesResults = [],
    results = [];

  if (genres) {
    moviesGenres = genres;
  }

  if (moviesData) {
    moviesResults = moviesData;
    results = moviesResults.results;
  }

  const nextPage = () => {
    if (currentPage < moviesResults.total_pages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      {window.scrollTo(0, 0)}
      <GenresContainer>
        {moviesGenres.map(({ id, name }) => (
          <Link key={id} url={`/movie/${id}/${name}`}>
            {name}
          </Link>
        ))}
      </GenresContainer>
      <MoviesContainer>
        <Pagination
          prevPage={prevPage}
          nextPage={nextPage}
          currentPage={currentPage}
          totalPages={moviesResults.total_pages}
        />
        {results.map(
          ({ id, title, vote_average, poster_path, release_date }, index) => (
            <MovieCard
              id={id}
              title={title}
              vote_average={vote_average}
              poster_path={poster_path}
              release_date={release_date}
              key={index}
              imageUrl={imageUrl}
            />
          )
        )}
        <Pagination
          prevPage={prevPage}
          nextPage={nextPage}
          currentPage={currentPage}
          totalPages={moviesResults.total_pages}
        />
      </MoviesContainer>
    </>
  );
};

export default Movies;

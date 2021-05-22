import { useState } from "react";
import styled from "styled-components";
import { moviesApi } from "../api/api";
import Link from "../components/Link";
import MovieCard from "../components/MovieCard";
import { useGenres, useMovies } from "../hooks/personalHooks";
import theme from "../theme";

const { primary, light } = theme;

const GenresContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 80px;
  a {
    border: solid 1px ${primary};
    font-size: 1rem;
    margin: 5px 10px;
    padding: 10px;
    width: 130px;
    text-decoration: none;
    &:hover {
    }
  }
`;

const MoviesContainer = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
`;

const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px;
  p {
    position: relative;
    margin: 0 10px;
  }
`;

const ButtonPagination = styled.button`
  width: 90px;
  background-color: ${primary};
  border-radius: 8px;
  color: ${light};
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

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
      <GenresContainer>
        {moviesGenres.map(({ id, name }) => (
          <Link key={id} url={`/movies/${id}/${name}`}>
            {name}
          </Link>
        ))}
      </GenresContainer>

      <MoviesContainer>
        <PaginationContainer>
          <ButtonPagination onClick={prevPage}>Précédente</ButtonPagination>
          <p>
            {currentPage} sur {moviesResults.total_pages}
          </p>
          <ButtonPagination onClick={nextPage}>Suivante</ButtonPagination>
        </PaginationContainer>
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
        <PaginationContainer>
          <ButtonPagination onClick={prevPage}>Précédente</ButtonPagination>
          <p>
            {currentPage} sur {moviesResults.total_pages}
          </p>
          <ButtonPagination onClick={nextPage}>Suivante</ButtonPagination>
        </PaginationContainer>
      </MoviesContainer>
    </>
  );
};

export default Movies;

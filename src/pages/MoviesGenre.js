import { useState } from "react";
import { useParams } from "react-router";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import {
  MainContainer,
  MoviesContainer,
} from "../components/styles/MoviesGenre.style";
import { useMovies } from "../hooks/personalHooks";

const MoviesGenre = ({ imageUrl }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { id, name } = useParams();

  const moviesGenreApi = `https://api.themoviedb.org/3/discover/movie?with_genres=${id}&api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR&page=`;

  const [moviesData] = useMovies(currentPage, moviesGenreApi);
  let moviesResults = [],
    results = [];

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
      <MainContainer>
        <h1>Voici les films du genre : {name}</h1>
        <Pagination
          prevPage={prevPage}
          nextPage={nextPage}
          currentPage={currentPage}
          totalPages={moviesResults.total_pages}
        />
        <MoviesContainer>
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
        </MoviesContainer>
        <Pagination
          prevPage={prevPage}
          nextPage={nextPage}
          currentPage={currentPage}
          totalPages={moviesResults.total_pages}
        />
      </MainContainer>
    </>
  );
};

export default MoviesGenre;

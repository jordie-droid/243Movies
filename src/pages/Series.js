import { useState } from "react";
import { seriesApi } from "../api/api";
import Link from "../components/Link";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import {
  GenresContainer,
  MoviesContainer,
} from "../components/styles/Movies.style";
import { useGenres, useMovies } from "../hooks/personalHooks";

const Series = ({ imageUrl }) => {
  const { genres: genresUrl, all: allSeriesUrl } = seriesApi;
  const [currentPage, setCurrentPage] = useState(1);

  const [genres] = useGenres(genresUrl);
  const [seriesData] = useMovies(currentPage, allSeriesUrl);

  let seriesGenres = [],
    seriesResults = [],
    results = [];

  if (genres) {
    seriesGenres = genres;
  }

  if (seriesData) {
    seriesResults = seriesData;
    results = seriesResults.results;
  }

  const nextPage = () => {
    if (currentPage < seriesResults.total_pages) {
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
        {seriesGenres.map(({ id, name }) => (
          <Link key={id} url={`/serie/${id}/${name}`}>
            {name}
          </Link>
        ))}
      </GenresContainer>
      <MoviesContainer>
        <Pagination
          prevPage={prevPage}
          nextPage={nextPage}
          currentPage={currentPage}
          totalPages={seriesResults.total_pages}
        />
        {results.map(
          ({ id, name, vote_average, poster_path, first_air_date }, index) => (
            <MovieCard
              id={id}
              title={name}
              vote_average={vote_average}
              poster_path={poster_path}
              release_date={first_air_date}
              key={index}
              imageUrl={imageUrl}
            />
          )
        )}
        <Pagination
          prevPage={prevPage}
          nextPage={nextPage}
          currentPage={currentPage}
          totalPages={seriesResults.total_pages}
        />
      </MoviesContainer>
    </>
  );
};

export default Series;

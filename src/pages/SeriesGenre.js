import { useState } from "react";
import { useParams } from "react-router";
import Pagination from "../components/Pagination";
import SerieCard from "../components/SerieCard";
import {
  MainContainer,
  MoviesContainer,
} from "../components/styles/MoviesGenre.style";
import { useMovies } from "../hooks/personalHooks";

const SeriesGenre = ({ imageUrl }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { id, name } = useParams();

  const seriesGenreApi = `https://api.themoviedb.org/3/discover/tv?with_genres=${id}&api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR&page=`;

  const [seriesData] = useMovies(currentPage, seriesGenreApi);
  let seriesResults = [],
    results = [];

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
      <MainContainer>
        <h1>Voici les séries du genre : {name}</h1>
        <Pagination
          prevPage={prevPage}
          nextPage={nextPage}
          currentPage={currentPage}
          totalPages={seriesResults.total_pages}
        />
        <MoviesContainer>
          {results.map(
            (
              { id, name, vote_average, poster_path, first_air_date },
              index
            ) => (
              <SerieCard
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
        </MoviesContainer>
        <Pagination
          prevPage={prevPage}
          nextPage={nextPage}
          currentPage={currentPage}
          totalPages={seriesResults.total_pages}
        />
      </MainContainer>
    </>
  );
};

export default SeriesGenre;

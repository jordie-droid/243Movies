import { useState } from "react";
import { useParams } from "react-router";
import CelebrityCard from "../components/CelebrityCard";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import SearchPageSkeleton from "../components/SearchPageSkeleton";
import SectionView from "../components/SectionView";
import { MainContainer, Tabs } from "../components/styles/SearchPage.style";
import { useSearch, useView } from "../hooks/personalHooks";

const SearchPage = ({ imageUrl }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentMedia, setCurrentMedia] = useState("movie");

  const { keyword } = useParams();

  const searchResults = useSearch(currentPage, keyword);

  let results = [],
    moviesData = [],
    seriesData = [],
    celebritiesData = [];

  if (searchResults !== null) {
    results = searchResults;
    moviesData = results.results.filter(
      (result) => result.media_type === "movie"
    );
    seriesData = results.results.filter(
      (result) => result.media_type === "serie"
    );
    celebritiesData = results.results.filter(
      (result) => result.media_type === "person"
    );
  }

  const [moviesViewLess, moviesViewMore, moviesLimit] = useView(5, moviesData);
  const [seriesViewLess, seriesViewMore, seriesLimit] = useView(5, seriesData);
  const [celebritiesViewLess, celebritiesViewMore, celebritiesLimit] = useView(
    5,
    celebritiesData
  );

  const nextPage = () => {
    if (currentPage < searchResults.total_pages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const activeMedia = ({ target: { name } }) => {
    setCurrentMedia(name);
  };

  const showResults = () => {
    if (currentMedia === "movie") {
      return (
        <>
          {moviesData.length > 0 ? (
            <SectionView
              title="Films"
              viewMore={moviesViewMore}
              viewLess={moviesViewLess}
              limit={moviesLimit}
              length={moviesData.length}
            >
              {moviesData
                .slice(0, moviesLimit)
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
          ) : (
            <h5>Aucun film trouvé</h5>
          )}
        </>
      );
    } else if (currentMedia === "serie") {
      return (
        <>
          {seriesData.length > 0 ? (
            <SectionView
              title="Series"
              viewMore={seriesViewMore}
              viewLess={seriesViewLess}
              limit={seriesLimit}
              length={seriesData.length}
            >
              {seriesData
                .slice(0, seriesLimit)
                .map(
                  (
                    { id, name, vote_average, poster_path, first_air_date },
                    index
                  ) => {
                    return (
                      <MovieCard
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
          ) : (
            <h5>Aucune série trouvée</h5>
          )}
        </>
      );
    } else {
      return (
        <>
          {celebritiesData.length > 0 ? (
            <SectionView
              title="Célébrités"
              viewLess={celebritiesViewLess}
              viewMore={celebritiesViewMore}
              limit={celebritiesLimit}
              length={celebritiesData.length}
            >
              {celebritiesData
                .slice(0, celebritiesLimit)
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
          ) : (
            <h5>Aucune Célébrité trouvée</h5>
          )}
        </>
      );
    }
  };

  return (
    <>
      {results.length !== 0 ? (
        <MainContainer>
          <h1>
            {results.results.length > 1
              ? `${results.total_results} résultats relatifs `
              : `${results.total_results} résultat relatif `}
            à <strong>{keyword}</strong>
          </h1>

          <Pagination
            prevPage={prevPage}
            nextPage={nextPage}
            currentPage={currentPage}
            totalPages={results.total_pages}
          />

          <Tabs>
            <button name="movie" onClick={activeMedia}>
              Films
            </button>
            <button name="serie" onClick={activeMedia}>
              Séries
            </button>
            <button name="celebrity" onClick={activeMedia}>
              Célébrités
            </button>
          </Tabs>

          {showResults()}

          <Pagination
            prevPage={prevPage}
            nextPage={nextPage}
            currentPage={currentPage}
            totalPages={results.total_pages}
          />
          <div></div>
        </MainContainer>
      ) : (
        <SearchPageSkeleton />
      )}
    </>
  );
};

export default SearchPage;

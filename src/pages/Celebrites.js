import { useState } from "react";
import { celebritiesApi } from "../api/api";
import CelebrityCard from "../components/CelebrityCard";
import Pagination from "../components/Pagination";
import { CelebritiesContainer } from "../components/styles/Celebrities.style";
import { useCelebrities } from "../hooks/personalHooks";

const Celebrites = ({ imageUrl }) => {
  const { popular: popularCelebrities } = celebritiesApi;
  const [currentPage, setCurrentPage] = useState(1);

  const [celebritiesData] = useCelebrities(currentPage, popularCelebrities);

  let celebritiesResults = [],
    results = [];

  if (celebritiesData) {
    celebritiesResults = celebritiesData;
    results = celebritiesResults.results;
  }

  const nextPage = () => {
    if (currentPage < celebritiesResults.total_pages) {
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
      <CelebritiesContainer>
        <Pagination
          prevPage={prevPage}
          nextPage={nextPage}
          currentPage={currentPage}
          totalPages={celebritiesResults.total_pages}
        />
        {results.map(({ id, name, profile_path }, index) => (
          <CelebrityCard
            id={id}
            key={index}
            profile_path={profile_path}
            name={name}
            imageUrl={imageUrl}
          />
        ))}
        <Pagination
          prevPage={prevPage}
          nextPage={nextPage}
          currentPage={currentPage}
          totalPages={celebritiesResults.total_pages}
        />
      </CelebritiesContainer>
    </>
  );
};

export default Celebrites;

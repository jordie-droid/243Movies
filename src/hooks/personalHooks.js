import { useEffect } from "react";
import { useState } from "react";

export const usePage = (defaultValue, pagesNumber) => {
  const [page, setPage] = useState(defaultValue);

  const getPage = () => {
    return page;
  };

  const nextPage = () => {
    if (page < pagesNumber) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return [getPage, prevPage, nextPage];
};

export const useMovies = (currentPage, url) => {
  const [moviesUrl] = useState(`${url}${currentPage}`);
  const [moviesData, setMoviesData] = useState();

  const fetchMovies = async () => {
    const response = await fetch(moviesUrl);
    const data = await response.json();
    setMoviesData(data);
  };

  useEffect(() => {
    fetchMovies();
  }, [moviesUrl]);

  return [moviesData];
};

export const useView = (defaultLimit, table) => {
  const [limit, setLimit] = useState(defaultLimit);

  const viewLess = () => {
    setLimit((prevValue) => prevValue - 5);
    limit < table.length && setLimit(5);
  };

  const viewMore = () => {
    setLimit((prevValue) => prevValue + 5);
    limit > table.length && setLimit(table.length);
  };

  return [viewLess, viewMore, limit];
};

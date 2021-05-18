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

export const useMovies = (currentPage, url) => {
  const [moviesUrl] = useState(`${url}${currentPage}`);
  const [moviesData, setMoviesData] = useState();

  const fetchMovies = async () => {
    const response = await fetch(moviesUrl);
    const data = await response.json();
    await setMoviesData(data);
  };

  useEffect(() => {
    fetchMovies();
  }, [moviesUrl]);

  return [moviesData];
};

export const useMovieDetails = (movieID) => {
  const [detailMovieUrl] = useState(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR`
  );
  const [creditMovieUrl] = useState(
    `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR`
  );
  const [recommendationMovieUrl] = useState(
    `https://api.themoviedb.org/3/movie/${movieID}/recommendations?api_key=d6ad6af3d05f971cd2712d949276910b&language=en-US&page=1`
  );
  const [similarMoviesUrl] = useState(
    `https://api.themoviedb.org/3/movie/${movieID}/similar?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR&page=1`
  );

  const [trailerUrl] = useState(
    `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR`
  );

  const [detailMovieData, setDetail] = useState();
  const [creditMovieData, setCredit] = useState();
  const [recommendation, setRecommendation] = useState();
  const [similarMovies, setSimilarMovies] = useState();
  const [trailerKey, setTrailerKey] = useState();

  const fetchDetailMovie = async () => {
    const response = await fetch(detailMovieUrl);
    const data = await response.json();
    await setDetail(data);
  };

  const fetchCreditSerie = async () => {
    const response = await fetch(creditMovieUrl);
    const data = await response.json();
    await setCredit(data);
  };

  const fetchRecommendationSerie = async () => {
    const response = await fetch(recommendationMovieUrl);
    const data = await response.json();
    await setRecommendation(data);
  };

  const fetchSimilarSerie = async () => {
    const response = await fetch(similarMoviesUrl);
    const data = await response.json();
    await setSimilarMovies(data);
  };

  const fetchTrailerSerie = async () => {
    const response = await fetch(trailerUrl);
    const data = await response.json();
    await setTrailerKey(data.results);
  };

  useEffect(() => {
    fetchDetailMovie();
  }, [detailMovieUrl]);

  useEffect(() => {
    fetchCreditSerie();
  }, [creditMovieUrl]);

  useEffect(() => {
    fetchRecommendationSerie();
  }, [recommendationMovieUrl]);

  useEffect(() => {
    fetchSimilarSerie();
  }, [similarMoviesUrl]);

  useEffect(() => {
    fetchTrailerSerie();
  }, [trailerUrl]);

  return [
    detailMovieData,
    creditMovieData,
    similarMovies,
    recommendation,
    trailerKey,
  ];
};

export const useSerieDetails = (serieID) => {
  const [detailSerieUrl, setDetailSerieUrl] = useState("");

  const [creditSerieUrl] = useState(
    `https://api.themoviedb.org/3/tv/${serieID}/credits?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR`
  );
  const [recommendationSerieUrl] = useState(
    `https://api.themoviedb.org/3/tv/${serieID}/recommendations?api_key=d6ad6af3d05f971cd2712d949276910b&language=en-US&page=1`
  );
  const [similarSeriesUrl] = useState(
    `https://api.themoviedb.org/3/tv/${serieID}/similar?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR&page=1`
  );

  const [trailerUrl] = useState(
    `https://api.themoviedb.org/3/tv/${serieID}/videos?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR`
  );

  const [detailSerieData, setDetail] = useState();
  const [creditSerieData, setCredit] = useState();
  const [recommendation, setRecommendation] = useState();
  const [similarSeries, setSimilarSeries] = useState();
  const [trailerKey, setTrailerKey] = useState();

  const fetchDetailSerie = async () => {
    setDetailSerieUrl(
      `https://api.themoviedb.org/3/tv/${serieID}?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR`
    );
    const response = await fetch(detailSerieUrl);
    const data = await response.json();
    await setDetail(data);
  };

  const fetchCreditSerie = async () => {
    const response = await fetch(creditSerieUrl);
    const data = await response.json();
    await setCredit(data);
  };

  const fetchRecommendationSerie = async () => {
    const response = await fetch(recommendationSerieUrl);
    const data = await response.json();
    await setRecommendation(data);
  };

  const fetchSimilarSerie = async () => {
    const response = await fetch(similarSeriesUrl);
    const data = await response.json();
    await setSimilarSeries(data);
  };

  const fetchTrailerSerie = async () => {
    const response = await fetch(trailerUrl);
    const data = await response.json();
    await setTrailerKey(data.results);
  };

  useEffect(() => {
    console.log("text :", detailSerieUrl);
  }, []);
  useEffect(() => {
    fetchDetailSerie();
  }, [detailSerieUrl]);

  useEffect(() => {
    fetchCreditSerie();
  }, [creditSerieUrl]);

  useEffect(() => {
    fetchRecommendationSerie();
  }, [recommendationSerieUrl]);

  useEffect(() => {
    fetchSimilarSerie();
  }, [similarSeriesUrl]);

  useEffect(() => {
    fetchTrailerSerie();
  }, [trailerUrl]);

  return [
    detailSerieData,
    creditSerieData,
    similarSeries,
    recommendation,
    trailerKey,
  ];
};

export const useCelebrities = (currentPage, url) => {
  const [celebritiesUrl] = useState(`${url}${currentPage}`);
  const [celebritiesData, setCelebritiesData] = useState();

  const fetchMovies = async () => {
    const response = await fetch(celebritiesUrl);
    const data = await response.json();
    await setCelebritiesData(data);
  };

  useEffect(() => {
    fetchMovies();
  }, [celebritiesUrl]);

  return [celebritiesData];
};

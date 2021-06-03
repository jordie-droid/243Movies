import { useEffect } from "react";
import { useState } from "react";

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
  const moviesUrl = `${url}${currentPage}`;
  const [moviesData, setMoviesData] = useState();

  const fetchMovies = async () => {
    const response = await fetch(moviesUrl);
    const data = await response.json();
    await setMoviesData(data);
  };

  useEffect(() => {
    fetchMovies();
  }, [currentPage]);

  return [moviesData];
};

export const useMovieDetails = (movieID) => {
  const movieDetailUrl = `https://api.themoviedb.org/3/movie/${movieID}?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR`;
  const creditMovieUrl = `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR`;
  const recommendationMovieUrl = `https://api.themoviedb.org/3/movie/${movieID}/recommendations?api_key=d6ad6af3d05f971cd2712d949276910b&language=en-US&page=1`;
  const similarMoviesUrl = `https://api.themoviedb.org/3/movie/${movieID}/similar?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR&page=1`;
  const trailerUrl = `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR`;

  const [movieDetailData, setDetail] = useState(null);
  const [movieCreditData, setCredit] = useState(null);
  const [recommendation, setRecommendation] = useState(null);
  const [similarMovies, setSimilarMovies] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);

  const fetchDetailMovie = async () => {
    const response = await fetch(movieDetailUrl);
    const data = await response.json();
    await setDetail(data);
  };

  const fetchCreditMovie = async () => {
    const response = await fetch(creditMovieUrl);
    const data = await response.json();
    await setCredit(data);
  };

  const fetchRecommendationMovie = async () => {
    const response = await fetch(recommendationMovieUrl);
    const data = await response.json();
    await setRecommendation(data);
  };

  const fetchSimilarMovie = async () => {
    const response = await fetch(similarMoviesUrl);
    const data = await response.json();
    await setSimilarMovies(data);
  };

  const fetchTrailerMovie = async () => {
    const response = await fetch(trailerUrl);
    const data = await response.json();
    await setTrailerKey(
      data.results.length > 0
        ? data.results[0].key
        : "La vidéo d'annonce n'est pas encore disponible"
    );
  };

  useEffect(() => {
    fetchDetailMovie();
    fetchTrailerMovie();
    fetchSimilarMovie();
    fetchRecommendationMovie();
    fetchCreditMovie();
  }, [movieID]);

  return [
    movieDetailData,
    movieCreditData,
    similarMovies,
    recommendation,
    trailerKey,
  ];
};

export const useSerieDetails = (serieID) => {
  const serieDetailUrl = `https://api.themoviedb.org/3/tv/${serieID}?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR`;
  const serieCreditUrl = `https://api.themoviedb.org/3/tv/${serieID}/credits?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR`;
  const SerieRecommendationUrl = `https://api.themoviedb.org/3/tv/${serieID}/recommendations?api_key=d6ad6af3d05f971cd2712d949276910b&language=en-US&page=1`;
  const similarSeriesUrl = `https://api.themoviedb.org/3/tv/${serieID}/similar?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR&page=1`;
  const trailerUrl = `https://api.themoviedb.org/3/tv/${serieID}/videos?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR`;

  const [detailSerieData, setDetail] = useState(null);
  const [creditSerieData, setCredit] = useState(null);
  const [recommendation, setRecommendation] = useState(null);
  const [similarSeries, setSimilarSeries] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);

  const fetchDetailSerie = async () => {
    const response = await fetch(serieDetailUrl);
    const data = await response.json();
    await setDetail(data);
  };

  const fetchCreditSerie = async () => {
    const response = await fetch(serieCreditUrl);
    const data = await response.json();
    await setCredit(data);
  };

  const fetchRecommendationSerie = async () => {
    const response = await fetch(SerieRecommendationUrl);
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
    await setTrailerKey(
      data.results.length > 0
        ? data.results[0].key
        : "La vidéo d'annonce n'est pas encore disponible"
    );
  };

  useEffect(() => {
    fetchDetailSerie();
    fetchTrailerSerie();
    fetchCreditSerie();
    fetchSimilarSerie();
    fetchRecommendationSerie();
  }, [serieID]);

  return [
    detailSerieData,
    creditSerieData,
    similarSeries,
    recommendation,
    trailerKey,
  ];
};

export const useCelebrities = (currentPage, url) => {
  const celebritiesUrl = `${url}${currentPage}`;
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

export const useCelebrityInfo = (celebrityID) => {
  const celebrityUrl = `https://api.themoviedb.org/3/person/${celebrityID}?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR`;
  const celebrityMovieCreditUrl = `https://api.themoviedb.org/3/person/${celebrityID}/movie_credits?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR`;

  const [celebrityInfo, setCelebrityInfo] = useState(null);
  const [movieCredit, setMovieCredit] = useState(null);

  const fetchCelebrityInfo = async () => {
    const response = await fetch(celebrityUrl);
    const data = await response.json();
    await setCelebrityInfo(data);
  };

  const fetchcelebrityMovieCredit = async () => {
    const response = await fetch(celebrityMovieCreditUrl);
    const data = await response.json();
    setMovieCredit(data);
  };

  useEffect(() => {
    fetchCelebrityInfo();
    fetchcelebrityMovieCredit();
  }, [celebrityID]);

  return [celebrityInfo, movieCredit];
};

export const useGenres = (url) => {
  const [genres, setGenres] = useState(null);

  const fetchGenres = async () => {
    const response = await fetch(url);
    const data = await response.json();
    await setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return [genres];
};

export const useSearch = (page, keyWord) => {
  const searchUrl = `https://api.themoviedb.org/3/search/multi?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR&page=${page}&include_adult=false&query=${keyWord}`;

  const [searchResults, setSearchResults] = useState(null);

  const fetchKeyWord = async () => {
    const response = await fetch(searchUrl);
    const data = await response.json();
    await setSearchResults(data);
  };

  useEffect(() => {
    fetchKeyWord();
  }, [searchUrl]);

  return searchResults;
};

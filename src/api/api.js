export const moviesApi = {
  all: "https://api.themoviedb.org/3/discover/movie?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrat&page=",
  popular:
    "https://api.themoviedb.org/3/movie/popular?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR&page",
  featured:
    "https://api.themoviedb.org/3/movie/upcoming?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR&page=",
  genre: "",
  moviesByGenre: "",
};

export const seriesApi = {
  all: "",
  popular:
    "https://api.themoviedb.org/3/tv/popular?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR&page=",
  featured: "",
  genre: "",
  seriesByGenre: "",
};

export const celebritiesApi = {
  all: "",
  popular:
    "https://api.themoviedb.org/3/person/popular?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR&page=",
};

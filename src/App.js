import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";
// import Home from "./pages/Home";
import Footer from "./components/Footer";
import Router from "./Router";
// import { BrowserRouter, Route } from "react-router-dom";
// import MovieViewMore from "./pages/MovieViewMore";
// import SerieViewMore from "./pages/SerieViewMore";
// import CelebrityViewMore from "./pages/CelebrityViewMore";
// import Movies from "./pages/Movies";
// import Series from "./pages/Series";
// import MoviesGenre from "./pages/MoviesGenre";
// import SeriesGenre from "./pages/SeriesGenre";
// import Celebrites from "./pages/Celebrites";
// import SearchPage from "./pages/SearchPage";

const App = () => {
  return (
    <>
      <Router Header={<Header />} Footer={<Footer />} />
    </>
  );
};

export default App;

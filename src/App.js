import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import MovieViewMore from "./pages/MovieViewMore";
import SerieViewMore from "./pages/SerieViewMore";
import CelebrityViewMore from "./pages/CelebrityViewMore";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import MoviesGenre from "./pages/MoviesGenre";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Route
          exact
          path="/"
          component={() => (
            <Home imageUrl={"https://image.tmdb.org/t/p/w1280"} />
          )}
        />
        <Route
          exact
          path="/movieViewMore/:id"
          component={() => (
            <MovieViewMore imageUrl={"https://image.tmdb.org/t/p/w1280"} />
          )}
        />
        <Route
          exact
          path="/serieViewMore/:id"
          component={() => (
            <SerieViewMore imageUrl={"https://image.tmdb.org/t/p/w1280"} />
          )}
        />
        <Route
          exact
          path="/celebrityViewMore/:id"
          component={() => (
            <CelebrityViewMore imageUrl={"https://image.tmdb.org/t/p/w1280"} />
          )}
        />
        <Route
          exact
          path="/movies"
          component={() => (
            <Movies imageUrl={"https://image.tmdb.org/t/p/w1280"} />
          )}
        />
        <Route
          exact
          path="/movie/:id/:name"
          component={() => (
            <MoviesGenre imageUrl={"https://image.tmdb.org/t/p/w1280"} />
          )}
        />

        <Route
          exact
          path="/Series"
          component={() => (
            <Series imageUrl={"https://image.tmdb.org/t/p/w1280"} />
          )}
        />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

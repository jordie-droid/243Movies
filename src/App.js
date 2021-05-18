import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import MovieViewMore from "./pages/MovieViewMore";
import SerieViewMore from "./pages/SerieViewMore";

const App = () => {
  // const [currentPage, prevPage, nextPage] = usePage(1, 10);

  //     <p>current page : {currentPage()} </p>
  //     <button onClick={prevPage}>prev</button>
  //     <button onClick={nextPage}>next</button>
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
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

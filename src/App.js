import { usePage } from "./hooks/personalHooks";
import Header from "./components/Header";
import "./css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";

const App = () => {
  const imageUrl = "https://image.tmdb.org/t/p/w1280";
  const [currentPage, prevPage, nextPage] = usePage(1, 10);
  return (
    <>
      <Header />
      <Home imageUrl={imageUrl} />
      <p>current page : {currentPage()} </p>
      <button onClick={prevPage}>prev</button>
      <button onClick={nextPage}>next</button>
    </>
  );
};

export default App;

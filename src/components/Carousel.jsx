import { Carousel } from "react-bootstrap";
import { moviesApi } from "../api/api";
import { useMovies } from "../hooks/personalHooks";

const FadeCarousel = ({ imageUrl }) => {
  const { all } = moviesApi;

  const [data] = useMovies(1, all);

  const showCarousel = () => {
    let movies = null;
    if (data) {
      movies = data.results.slice(0, 4);
      return movies.map(({ id, backdrop_path, title }) => {
        return showImages(id, backdrop_path, title);
      });
    }
  };

  const showImages = (id, backdrop_path, title) => {
    return (
      <Carousel.Item key={id} className="h20vh">
        <img
          className="d-block w-100"
          src={`${imageUrl}${backdrop_path}`}
          alt={title}
        />
        <Carousel.Caption className="slider-caption">
          <h5>
            Bienvenue. Trouvez rapidement les informations sur les films que
            vous cherchez. N'hesitez pas, explore maintenant !
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
    );
  };

  return (
    <Carousel controls={false} indicators={false} fade className="mt-7">
      {showCarousel()}
    </Carousel>
  );
};

export default FadeCarousel;

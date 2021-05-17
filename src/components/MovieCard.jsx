import Note from "./Note";
import { Body, CardContainer, Header } from "./styles/MovieCard.style";
import NoImage from "../images/NoImage.png";
import { Link } from "react-router-dom";

const MovieCard = ({
  title,
  vote_average,
  poster_path,
  release_date,
  imageUrl,
}) => {
  return (
    <CardContainer>
      <Header>
        <img
          src={poster_path ? `${imageUrl}${poster_path}` : NoImage}
          alt={title}
        />
      </Header>
      <Body>
        <h6>{title}</h6>
        <p>{release_date}</p>
        <Note percent={Math.round(vote_average * 10)} />
        <Link to="/search">Plus d'info</Link>
      </Body>
    </CardContainer>
  );
};

export default MovieCard;

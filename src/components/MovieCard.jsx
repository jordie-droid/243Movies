import Link from "./Link";
import { Body, CardContainer, Header } from "./styles/MovieCard.style";

const MovieCard = ({ title, vote_average, poster_path, imageUrl }) => {
  return (
    <CardContainer>
      <Header>
        <img src={`${imageUrl}${poster_path}`} alt={title} />
      </Header>
      <Body>
        <h6>{title}</h6>
        <span>{vote_average}</span>
        <Link url="/search">Plus d'info</Link>
      </Body>
    </CardContainer>
  );
};

export default MovieCard;

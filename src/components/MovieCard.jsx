import Link from "./Link";
import Note from "./Note";
import {
  Body,
  CardContainer,
  Header,
  OverView,
} from "./styles/MovieCard.style";

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
        <img src={`${imageUrl}${poster_path}`} alt={title} />
      </Header>
      <Body>
        <h6>{title}</h6>
        <p>{release_date}</p>
        <Note percent={Math.round(vote_average * 10)} />
        <Link url="/search">Plus d'info</Link>
      </Body>
    </CardContainer>
  );
};

export default MovieCard;

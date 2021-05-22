import { Body, CardContainer, Header } from "./styles/CelebrityCard.style";
import NoImage from "../images/NoImage.png";
import { Link } from "react-router-dom";

const CelebrityCard = ({ id, profile_path, name, imageUrl }) => {
  return (
    <CardContainer>
      <Header>
        <img
          src={profile_path ? `${imageUrl}${profile_path}` : NoImage}
          alt={name}
        />
      </Header>
      <Body>
        <h6>{name}</h6>
        <Link to={`/celebrityViewMore/${id}`}>Plus d'info</Link>
      </Body>
    </CardContainer>
  );
};

export default CelebrityCard;

import { useParams } from "react-router";
import {
  AboutCelebrity,
  Biography,
  MainContainer,
  Profile,
  Movies,
} from "../components/styles/CelebrityViewMore.style";
import { useCelebrityInfo } from "../hooks/personalHooks";
import NoImage from "../images/NoImage.png";

const CelebrityViewMore = ({ imageUrl }) => {
  const { id: celebrityID } = useParams();

  const [celebrityInfo, movieCredit] = useCelebrityInfo(celebrityID);

  let infoData = [],
    movieCreditData = [];

  if (celebrityInfo) {
    infoData = celebrityInfo;
  }

  if (movieCredit) {
    movieCreditData = movieCredit.cast;
  }

  return (
    <>
      {window.scrollTo(0, 0)}
      <MainContainer imageUrl={imageUrl} profile_path={infoData.profile_path}>
        <AboutCelebrity>
          <Profile>
            <img
              src={
                infoData.profile_path
                  ? `${imageUrl}${infoData.profile_path}`
                  : NoImage
              }
              alt={infoData.name}
            />
          </Profile>
          <Biography>
            <h1>{infoData.name}</h1>
            <p>
              {infoData.biography
                ? infoData.biography
                : `La bio graphie de ${infoData.name} n'est pas encore disponible`}
            </p>
          </Biography>
        </AboutCelebrity>
      </MainContainer>
      <Movies>
        <h3>
          {infoData.gender === 2
            ? "Comme acteur dans les films :"
            : "Comme actrice dans les films :"}
        </h3>
        <p>
          {movieCreditData.map((movie) => (
            <strong key={movie.id}>
              {movie.title} : {movie.character} ;{" "}
            </strong>
          ))}{" "}
        </p>
      </Movies>
    </>
  );
};

export default CelebrityViewMore;

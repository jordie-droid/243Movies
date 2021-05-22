import { useParams } from "react-router";
import { AboutCelebrity, Biography, MainContainer, Profile } from "../components/styles/CelebrityViewMore.style";
import { useCelebrityInfo } from "../hooks/personalHooks";
import NoImage from "../images/NoImage.png";


const CelebrityViewMore = ({ imageUrl }) => {
  const { id: celebrityID } = useParams();

  const [celebrityInfo] = useCelebrityInfo(celebrityID);

  let infoData = [];

  if (celebrityInfo) {
    infoData = celebrityInfo;
  }

  return (
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
  );
};

export default CelebrityViewMore;

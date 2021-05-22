import { useParams } from "react-router";
import styled from "styled-components";
import { useCelebrityInfo } from "../hooks/personalHooks";
import NoImage from "../images/NoImage.png";

const MainContainer = styled.section`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 98%;
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  padding: 40px 0 40px;
  &::after {
    content: "";
    background: url(${({ profile_path, imageUrl }) =>
        profile_path ? `${imageUrl}${profile_path}` : NoImage})
      no-repeat center center;
    background-size: cover;
    opacity: 0.3;
    width: 100%;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    border-radius: 10px;
  }
`;

const AboutCelebrity = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Profile = styled.div`
  position: relative;
  width: 300px;
  height: 500px;
  max-height: 500px;
  overflow: hidden;
  img {
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;

const Biography = styled.div`
  width: 70%;
  margin-left: 20px;
  h1 {
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

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

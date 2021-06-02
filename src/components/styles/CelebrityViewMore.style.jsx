import styled from "styled-components";
import NoImage from "../../images/NoImage.png";
import theme from "../../theme";

const { primary, light } = theme;

export const MainContainer = styled.section`
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
  h3 {
    margin: 30px 40px 0;
    color: ${primary};
  }
  p {
    margin: 20px 40px;
    color: ${light};
  }
`;

export const AboutCelebrity = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const Profile = styled.div`
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

export const Biography = styled.div`
  width: 70%;
  margin-left: 20px;
  h1 {
    font-weight: bold;
    margin-bottom: 10px;
    color: ${primary};
  }
`;

export const Movies = styled.div`
  padding: 20px;
  color: ${light};
  h3 {
    color: ${primary};
  }
`;

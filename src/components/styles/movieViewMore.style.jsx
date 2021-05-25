import styled from "styled-components";
import theme from "../../theme";
import NoImage from "../../images/NoImage.png";

const { primary, dark, light } = theme;

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
    background: url(${({ poster_path, imageUrl }) =>
        poster_path ? `${imageUrl}${poster_path}` : NoImage})
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

export const AboutMovie = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const MoviePoster = styled.div`
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

export const Overview = styled.div`
  width: 70%;
  margin-left: 20px;
  color: ${light};
  h1 {
    font-weight: bold;
    margin-bottom: 10px;
    color: ${primary};
  }
`;

export const MovieActors = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const PlayVideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background-color: ${primary};
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  opacity: 0.7;
  cursor: pointer;
  transition: 1s;
  &:hover {
    background-color: ${dark};
  }
`;

export const PlayVideo = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${light};
  clip-path: polygon(0 0, 100% 50%, 0 100%);
`;

export const Card = styled.div`
  width: 170px;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-bottom: 5px;
  border: solid 2px ${primary};
  border-radius: 10px 0 10px 0;
  overflow: hidden;
  img {
    width: 100%;
    height: 150px;
  }
`;

export const CardBody = styled.div`
  padding: 10px;
  background-color: #000;
  color: ${light};
  height: 100%;
`;

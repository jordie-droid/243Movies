import styled from "styled-components";
import theme from "../../theme";

const { light, primary } = theme;

export const CardContainer = styled.div`
  position: relative;
  width: 250px;
  height: 400px;
  background-color: ${light};
  border: solid 2px ${primary};
  border-radius: 20px 0 20px 0;
  margin: 0 5px 20px;
`;

export const Header = styled.div`
  width: 100%;
  height: 300px;
  max-height: 300px;
  overflow: hidden;
  img {
    width: 100%;
    border-radius: 18px 0 0 0;
    object-fit: cover;
  }
`;

export const Body = styled.div`
  position: absolute;
  bottom: 30px;
  width: 100%;
  padding: 10px;
  background-color: ${light};
  border-top: solid 2px ${primary};
  h6 {
    font-weight: bold;
  }
  a {
    position: relative;
    left: -18px;
    padding: 10px;
    border-radius: 5px;
    background-color: ${primary};
    text-decoration: none;
    transition: 1s;
    margin: 20px;
    color: ${light};
  }
`;

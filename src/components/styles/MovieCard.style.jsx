import styled from "styled-components";
import theme from "../../theme";

const { light, basic, secondary, primary, dark } = theme;

export const CardContainer = styled.div`
  position: relative;
  width: 250px;
  height: 400px;
  background-color: ${light};
  border: solid 2px ${secondary};
  border-radius: 20px 0 20px 0;
  margin-bottom: 20px;
  box-sizing: content-box;
`;

export const Header = styled.div`
  width: 100%;
  height: 300px;
  max-height: 300px;
  img {
    width: 100%;
    height: 300px;
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
  h6 {
    font-weight: bold;
  }
  a {
    position: relative;
    left: 100px;
    width: 50px;
    height: 40px;
    padding: 10px;
    background-color: ${primary};
    text-decoration: none;
    transition: 1s;
    margin: 20px;
    color: ${light};
    &:hover {
      color: ${dark};
    }
  }
`;

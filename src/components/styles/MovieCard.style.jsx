import styled from "styled-components";
import theme from "../../theme";

const { light, basic, secondary, dark } = theme;

export const CardContainer = styled.div`
  position: relative;
  width: 250px;
  height: 400px;
  background-color: ${light};
  border: solid 2px ${secondary};
  border-radius: 20px 0 20px 0;
  margin-bottom: 20px;
  overflow: hidden;
`;

export const Header = styled.div`
  width: 100%;
  height: 300px;
  max-height: 200px;
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

export const Body = styled.div`
  position: absolute;
  bottom: 30px;
  width: 100%;
  padding: 10px;
  background-color: ${light};
  a {
    position: relative;
    top: 20px;
    left: 100px;
    width: 50px;
    height: 40px;
    padding: 10px;
    background-color: ${basic};
    color: ${dark};
    text-decoration: none;
    transition: 1s;
    margin: 10px;
    &:hover {
      color: ${light};
    }
  }
`;

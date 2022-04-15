import styled from "styled-components";
import theme from "../../theme";

const { dark, light, basic } = theme;

export const Footer = styled.footer`
  box-sizing: border-box;
  width: 100%;
  margin-top: 50px;
  background-color: ${dark};
  color: ${light};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Social = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px;
  img {
    width: 35px;
  }
  ~ hr {
    background-color: ${basic};
    margin-left: 20px;
  }
`;

export const Description = styled.div`
  width: 50%;
  text-align: justify;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

export const CopyRight = styled.div`
  width: 100%;
  background-color: #000;
  padding: 5px;
  color: ${light};
  display: flex;
  justify-content: center;
`;

import styled from "styled-components";
import theme from "../../theme";

const { dark, light, primary, basic } = theme;

export const Footer = styled.footer`
  box-sizing: border-box;
  width: 100%;
  margin-top: 50px;
  background-color: ${light};
  color: ${dark};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  margin: 20px;
  hr {
    background-color: ${basic};
  }
  img {
    width: 50px;
    margin-bottom: 5px;
  }
`;

export const Social = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px;
  img {
    width: 50px;
    margin-left: 50px;
  }
  ~ hr {
    background-color: ${basic};
    margin-right: 20px;
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
  background-color: ${primary};
  padding: 5px;
  color: ${light};
  display: flex;
  justify-content: center;
`;

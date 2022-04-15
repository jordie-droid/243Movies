import styled, { keyframes } from "styled-components";
import theme from "../../theme";

const { dark, primary } = theme;

const scrollAnimation = keyframes`
    from{
        transform: translateX(0);
    }
    to{
        transform: translateX(100%);
    }
`;

export const MainContainer = styled.div`
  margin-top: 70px;
  padding: 5px;
`;
export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  button {
    width: 150px;
    height: 50px;
    margin: 10px;
    border: solid 1px ${primary};
    background-color: transparent;
    overflow: hidden;
    div {
      width: 100%;
      height: 100%;
      background-color: ${dark};
      border: none;
      animation: ${scrollAnimation} 1s infinite;
    }
  }
`;

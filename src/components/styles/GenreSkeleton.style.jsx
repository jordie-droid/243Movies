import styled, { keyframes } from "styled-components";
import theme from "../../theme";

const { primary, dark } = theme;

const scrollAnimationCard = keyframes`
    0%{
        transform :translateX(0);
    }
    100%{
        transform: translateX(100%);
    }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 70px;
`;

export const Button = styled.div`
  border: solid 2px ${primary};
  width: 210px;
  height: 50px;
  margin: 20px 20px 0;
  overflow: hidden;
  div {
    width: 100%;
    height: 100%;
    background-color: ${dark};
    box-shadow: 0 0 5px 5px ${dark};
    animation: 1.2s ${scrollAnimationCard} linear infinite;
  }
`;

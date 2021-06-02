import styled, { keyframes } from "styled-components";
import theme from "../../theme";

const { primary, light, dark } = theme;

const scrollAnimationCard = keyframes`
    0%{
        transform :translateX(0);
    }
    100%{
        transform: translateX(100%);
    }
`;

export const StyledSection = styled.section`
  margin: 70px 0 0;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  position: relative;
  width: 250px;
  height: 400px;
  margin: 10px;
  background-color: #000000;
  border: solid 2px ${light};
  border-radius: 20px 0 20px 0;
  overflow: hidden;
  div {
    width: 100%;
    height: 100%;
    background-color: ${dark};
    box-shadow: 0 0 5px 5px ${dark};
    animation: 1s ${scrollAnimationCard} linear infinite;
  }
`;

export const Button = styled.div`
  border: solid 2px ${primary};
  width: 90px;
  height: 50px;
  margin: 20px 20px 20px;
  overflow: hidden;
  div {
    width: 100%;
    height: 100%;
    background-color: ${dark};
    box-shadow: 0 0 5px 5px ${dark};
    animation: 1.2s ${scrollAnimationCard} linear infinite;
  }
`;

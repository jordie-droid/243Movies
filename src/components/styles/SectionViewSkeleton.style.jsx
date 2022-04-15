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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
`;

export const MainContainer = styled.div`
  h4 {
    position: relative;
    width: 35%;
    margin: 30px 10px 20px;
    font-size: 1.3rem;
    font-weight: bold;
    border-radius: 50px;
    padding: 10px;
    text-align: center;
    color: ${primary};
  }
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
  background-color: #000000;
  border: solid 2px ${light};
  border-radius: 20px 0 20px 0;
  overflow: hidden;
  margin: 10px;
  div {
    width: 100%;
    height: 100%;
    background-color: ${dark};
    box-shadow: 0 0 5px 5px ${dark};
    animation: 1s ${scrollAnimationCard} linear infinite;
  }
`;

export const ViewButton = styled.div`
  border: solid 2px ${primary};
  width: 50px;
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

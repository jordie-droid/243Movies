import styled from "styled-components";
import theme from "../../theme";

const { basic, light, dark } = theme;

export const Box = styled.div`
  position: absolute;
  top: -200px;
  left: -35px;
  width: 80px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Percent = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  div {
    position: absolute;
    top: 6px;
    left: 5px;
    width: 100%;
    height: 100%;
    color: ${light};
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 0.7rem;
    }
  }
`;

export const Svg = styled.svg`
  position: relative;
  width: 50px;
  height: 50px;
  transform: rotate(90deg);
  circle {
    width: 40px;
    height: 40px;
    fill: ${dark};
    stroke-width: 5;
    stroke: ${dark};
    stroke-dasharray: 130;
    stroke-dashoffset: 130;
    transform: translate(5px, 5px);
    &:nth-child(1) {
      stroke-dashoffset: 0;
      stroke: ${basic};
    }
    &:nth-child(2) {
      stroke: ${({ percent }) =>
        (percent < 50 && "#a93c28") ||
        ((percent === 50 || percent < 70) && "#f5cc47") ||
        (percent >= 70 && "#6fa550")};
      stroke-dashoffset: ${({ percent }) =>
        `calc(130 - (130 * ${percent}) / 100)`};
    }
  }
`;

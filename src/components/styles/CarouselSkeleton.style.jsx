import styled, { keyframes } from "styled-components";
import theme from "../../theme";

const { dark } = theme;

const carouselScroll = keyframes`
    from{
        transform: translateX(0);
    }
    to{
        transform: translateX(100%);
    }
`;

export const StyledCarouselSkeleton = styled.div`
  width: 100%;
  height: 720px;
  overflow: hidden;
  div {
    width: 100%;
    height: 100%;
    background: ${dark};
    animation: ${carouselScroll} 1s infinite;
  }
`;

import styled from "styled-components";
import theme from "../../theme";

const { basic, primary, dark } = theme;

export const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
`;

export const MainContainer = styled.div`
  h4 {
    position: relative;
    width: 35%;
    margin: 30px 10px 0;
    font-size: 1.3rem;
    font-weight: bold;
    border-radius: 50px;
    padding: 10px;
    text-align: center;
    color: ${dark};
  }
`;

export const ViewMore = styled.button`
  border: none;
  background-color: ${basic};
  width: 100px;
  height: 50px;
  position: relative;
  left: 50%;
  transform: translateX(-40%);
  transition: 1s;
  &:hover {
    color: ${primary};
  }
`;

export const ViewLess = styled.button`
  border: none;
  background-color: ${basic};
  width: 100px;
  height: 50px;
  position: relative;
  left: 40%;
  transform: translateX(-50%);
  &:hover {
    color: ${primary};
  }
`;

import styled from "styled-components";
import theme from "../../theme";

const { primary } = theme;

export const MainContainer = styled.section`
  margin-top: 80px;
  padding: 20px;
  h1 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 20px;
    color: ${primary};
  }
`;

export const MoviesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

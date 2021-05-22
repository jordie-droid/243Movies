import styled from "styled-components";
import theme from "../../theme";

const { primary } = theme;

export const GenresContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 80px;
  a {
    border: solid 1px ${primary};
    font-size: 1rem;
    margin: 5px 10px;
    padding: 10px;
    width: 210px;
    text-decoration: none;
    &:hover {
    }
  }
`;

export const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

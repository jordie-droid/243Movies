import styled from "styled-components";
import theme from "../../theme";

const { primary, light } = theme;

export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  p {
    position: relative;
    margin: 0 10px;
    color: ${light};
  }
`;

export const ButtonPagination = styled.button`
  width: 90px;
  border: solid 1px ${primary};
  background-color: transparent;
  color: ${light};
  cursor: pointer;
  transition: 1s;
  font-size: 1.3rem;
  &:focus {
    outline: none;
  }
  &:hover {
    color: ${primary};
  }
`;

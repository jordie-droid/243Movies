import styled from "styled-components";
import theme from "../../theme";

const { primary, light } = theme;

export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px;
  p {
    position: relative;
    margin: 0 10px;
  }
`;

export const ButtonPagination = styled.button`
  width: 90px;
  background-color: ${primary};
  border-radius: 8px;
  color: ${light};
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

import styled from "styled-components";
import theme from "../../theme";

const { primary, light } = theme;

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

export const ViewButton = styled.button`
  border: solid 1px ${primary};
  background-color: transparent;
  color: ${light};
  width: 90px;
  height: 50px;
  transition: 1s;
  margin: 20px 20px 0;
  &:focus {
    outline: none;
  }
  &:hover {
    color: ${primary};
  }
`;

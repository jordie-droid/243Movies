import styled from "styled-components";
import theme from "../../theme";

const { primary, dark } = theme;

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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ViewButton = styled.button`
  border: none;
  background-color: ${primary};
  width: 50px;
  height: 50px;
  transition: 1s;
  margin: 20px 20px 0;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;

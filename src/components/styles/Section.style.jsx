import styled from "styled-components";
import theme from "../../theme";

const { basic } = theme;

export const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
`;

export const MainContainer = styled.div`
  h4 {
    width: 35%;
    margin: 20px;
    font-weight: bold;
    border-radius: 10px;
  }
`;

export const ShowMore = styled.button`
  border: none;
  background-color: ${basic};
  width: 100px;
  height: 50px;
`;

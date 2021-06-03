import styled from "styled-components";
import theme from "../../theme";

const { light, primary } = theme;

export const MainContainer = styled.div`
  margin-top: 70px;
  color: ${light};
  h1 {
    color: ${light};
    text-align: center;
    font-size: 2rem;
    strong {
      color: ${primary};
    }
  }
  h5 {
    text-align: center;
    color: ${primary};
  }
`;
export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  button {
    width: 150px;
    height: 50px;
    margin: 10px;
    background-color: ${light};
    color: ${primary};
    font-size: 1.5rem;
    border: none;
    transition: 1s;
  }
`;

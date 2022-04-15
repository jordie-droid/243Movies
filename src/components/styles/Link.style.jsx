import { NavLink } from "react-router-dom";
import styled from "styled-components";
import theme from "../../theme";

const { light, dark } = theme;

const StyledLink = styled(NavLink)`
  font-size: 1rem;
  color: ${light};
  text-decoration: none;
  transition: 1s;
  width: 100px;
  display: flex;
  justify-content: center;
  &:hover {
    color: ${dark};
  }
`;
export default StyledLink;

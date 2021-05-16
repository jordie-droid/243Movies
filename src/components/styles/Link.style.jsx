import { NavLink } from "react-router-dom";
import styled from "styled-components";
import theme from "../../theme";

const { light, primary } = theme;

const StyledLink = styled(NavLink)`
  font-size: 1rem;
  color: ${light};
  text-decoration: none;
  transition: 1s;
  &:hover {
    color: ${primary};
  }
`;
export default StyledLink;

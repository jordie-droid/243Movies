import { NavLink } from "react-router-dom";
import styled from "styled-components";
import theme from "../../theme";

const { dark } = theme;

const StyledLink = styled(NavLink)`
  font-size: 1.3rem;
  color: ${dark};
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

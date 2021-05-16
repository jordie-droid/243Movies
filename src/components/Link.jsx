import StyledLink from "./styles/Link.style";

const Link = ({ url, activeClassName, children }) => {
  return (
    <StyledLink exact to={url} activeClassName={activeClassName}>
      {children}
    </StyledLink>
  );
};

export default Link;

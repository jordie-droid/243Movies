import {
  MainContainer,
  ViewMore,
  StyledSection,
  ViewLess,
} from "./styles/Section.style";

const Section = ({ title, viewMore, viewLess, children }) => {
  return (
    <MainContainer>
      <h4>{title}</h4>
      <StyledSection>{children}</StyledSection>
      <ViewLess onClick={viewLess}>Voir moins</ViewLess>
      <ViewMore onClick={viewMore}>Voir plus</ViewMore>
    </MainContainer>
  );
};

export default Section;

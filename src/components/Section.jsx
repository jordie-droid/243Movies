import { MainContainer, ShowMore, StyledSection } from "./styles/Section.style";

const Section = ({ title, children }) => {
  return (
    <MainContainer>
      <h4>{title}</h4>
      <StyledSection>{children}</StyledSection>
      <ShowMore>Voir plus</ShowMore>
    </MainContainer>
  );
};

export default Section;

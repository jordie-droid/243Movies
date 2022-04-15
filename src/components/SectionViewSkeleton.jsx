import {
  ButtonContainer,
  Card,
  MainContainer,
  StyledSection,
  ViewButton,
} from "./styles/SectionViewSkeleton.style";

const SectionViewSkeleton = ({ title }) => {
  return (
    <MainContainer>
      <h4>{title}</h4>
      <StyledSection>
        <Card>
          <div></div>
        </Card>
        <Card>
          <div></div>
        </Card>
        <Card>
          <div></div>
        </Card>
        <Card>
          <div></div>
        </Card>
        <Card>
          <div></div>
        </Card>
      </StyledSection>
      <ButtonContainer>
        <ViewButton><div></div></ViewButton>
        <ViewButton><div></div></ViewButton>
      </ButtonContainer>
    </MainContainer>
  );
};

export default SectionViewSkeleton;

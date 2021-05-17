import {
  MainContainer,
  ViewButton,
  StyledSection,
  ButtonContainer,
} from "./styles/SectionView.style";
import plus from "../images/icons/plus.svg";
import remove from "../images/icons/remove.svg";

const SectionView = ({ title, viewMore, viewLess, children }) => {
  return (
    <MainContainer>
      <h4>{title}</h4>
      <StyledSection>{children}</StyledSection>
      <ButtonContainer>
        <ViewButton onClick={viewLess}>
          <img src={remove} alt="remove" />
        </ViewButton>
        <ViewButton onClick={viewMore}>
          <img src={plus} alt="plus" />
        </ViewButton>
      </ButtonContainer>
    </MainContainer>
  );
};

export default SectionView;

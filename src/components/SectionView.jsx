import {
  MainContainer,
  ViewButton,
  StyledSection,
  ButtonContainer,
} from "./styles/SectionView.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const SectionView = ({ title, viewMore, viewLess, children }) => {
  return (
    <MainContainer>
      <h4>{title}</h4>
      <StyledSection>{children}</StyledSection>
      <ButtonContainer>
        <ViewButton onClick={viewLess}>
          <FontAwesomeIcon icon={faMinus} />
        </ViewButton>
        <ViewButton onClick={viewMore}>
          <FontAwesomeIcon icon={faPlus} />
        </ViewButton>
      </ButtonContainer>
    </MainContainer>
  );
};

export default SectionView;

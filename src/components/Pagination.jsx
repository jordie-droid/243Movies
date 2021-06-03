import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ButtonPagination,
  PaginationContainer,
} from "./styles/Pagination.style";

const Pagination = ({ currentPage, prevPage, nextPage, totalPages }) => {
  return (
    <PaginationContainer>
      <ButtonPagination onClick={prevPage}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </ButtonPagination>
      <p>
        {currentPage} / {totalPages}
      </p>
      <ButtonPagination onClick={nextPage}>
        <FontAwesomeIcon icon={faArrowRight} />
      </ButtonPagination>
    </PaginationContainer>
  );
};

export default Pagination;

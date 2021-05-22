import {
  ButtonPagination,
  PaginationContainer,
} from "./styles/Pagination.style";

const Pagination = ({ currentPage, prevPage, nextPage, totalPages }) => {
  return (
    <PaginationContainer>
      <ButtonPagination onClick={prevPage}>Précédente</ButtonPagination>
      <p>
        {currentPage} sur {totalPages}
      </p>
      <ButtonPagination onClick={nextPage}>Suivante</ButtonPagination>
    </PaginationContainer>
  );
};

export default Pagination;

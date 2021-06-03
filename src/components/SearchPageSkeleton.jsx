import { MainContainer, Tabs } from "./styles/SearchPageSkeleton.style";
import SectionViewSkeleton from "../components/SectionViewSkeleton";

const SearchPageSkeleton = () => {
  return (
    <MainContainer>
      <Tabs>
        <button>
          <div></div>
        </button>
        <button>
          <div></div>
        </button>
        <button>
          <div></div>
        </button>
      </Tabs>
      <div></div>
      <SectionViewSkeleton />
    </MainContainer>
  );
};

export default SearchPageSkeleton;

import { Search, Wrapper } from "./searchbar.styles";
import type { SearchbarProperties } from "./searchbar.types";

const Searchbar = ({
  search,
  setSearch,
  setSubmittedSearch,
  setPage,
}: SearchbarProperties) => {
  return (
    <Wrapper>
      <Search
        enterButton
        value={search}
        onChange={({ target: { value } }) => {
          setSearch(value);
        }}
        onSearch={(searchValue) => {
          setSubmittedSearch(searchValue);
          setPage(1);
        }}
        placeholder="Search your movie by title"
      />
    </Wrapper>
  );
};

export default Searchbar;

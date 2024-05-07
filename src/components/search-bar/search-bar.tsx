import { useTranslation } from "react-i18next";
import { Search, Wrapper } from "./search-bar.styles";
import type { SearchBarProperties } from "./search-bar.types";

const SearchBar = ({
  search,
  setSearch,
  setSubmittedSearch,
  setPage,
}: SearchBarProperties) => {
  const { t: translate } = useTranslation();
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
        placeholder={translate("home.search-bar.placeholder")}
      />
    </Wrapper>
  );
};

export default SearchBar;

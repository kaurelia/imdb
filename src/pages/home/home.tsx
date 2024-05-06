import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Filters from "~frontend/src/components/filters/filters";
import PreviewCard from "~frontend/src/components/preview-card/preview-card";
import Searchbar from "~frontend/src/components/searchbar/searchbar";
import TypeOfMovie from "~frontend/src/constants/type-of-movie/type-of-movie";
import useGetMovies from "~frontend/src/hooks/use-get-movies/use-get-movies";
import useHomePageURLParametersUpdate from "~frontend/src/hooks/use-home-page-url-parameters-update/use-home-page-url-parameters-update";
import { Pagination, Wrapper } from "./home.styles";

const Home = () => {
  const [parameters] = useSearchParams();
  const pageURLParameter = parameters.get("page");
  const searchURLParameter = parameters.get("search");
  const typeOfMovieURLParameter = parameters.get("typeOfMovie");
  const yearOfReleaseURLParameter = parseInt(
    parameters.get("yearOfRelease") ?? "",
  );
  const pageParameterAsNumber = parseInt(pageURLParameter ?? "");
  const [search, setSearch] = useState(searchURLParameter ?? "");
  const [submittedSearch, setSubmittedSearch] = useState(
    searchURLParameter ?? "",
  );
  const [typeOfMovie, setTypeOfMovie] = useState<TypeOfMovie | null>(
    Object.values(TypeOfMovie).includes(typeOfMovieURLParameter as TypeOfMovie)
      ? (typeOfMovieURLParameter as TypeOfMovie)
      : null,
  );
  const [yearOfRelease, setYearOfRelease] = useState<number | null>(
    isNaN(yearOfReleaseURLParameter) ? null : yearOfReleaseURLParameter,
  );
  const [page, setPage] = useState<null | number>(
    isNaN(pageParameterAsNumber) ? null : pageParameterAsNumber,
  );
  const { data: movies } = useGetMovies({
    page,
    typeOfMovie,
    yearOfRelease,
    submittedSearch,
  });
  const { Search: searchedMovies, totalResults } = movies ?? {};
  useHomePageURLParametersUpdate({
    page,
    submittedSearch,
    typeOfMovie,
    yearOfRelease,
  });
  return (
    <>
      <Searchbar
        search={search}
        setSearch={setSearch}
        setSubmittedSearch={setSubmittedSearch}
        setPage={setPage}
      />
      <Filters
        typeOfMovie={typeOfMovie}
        yearOfRelease={yearOfRelease}
        setYearOfRelease={setYearOfRelease}
        setTypeOfMovie={setTypeOfMovie}
      />
      <Wrapper>
        {searchedMovies?.map(
          ({
            imdbID,
            Title: title,
            Poster: poster,
            Type: type,
            Year: year,
          }) => {
            return (
              <PreviewCard
                key={`home-link-${imdbID}`}
                imdbID={imdbID}
                title={title}
                poster={poster}
                type={type}
                year={year}
              />
            );
          },
        )}
      </Wrapper>
      {totalResults && (
        <Pagination
          responsive
          onChange={(value) => {
            setPage(value);
          }}
          showSizeChanger={false}
          hideOnSinglePage
          defaultCurrent={page ?? 1}
          total={parseInt(totalResults)}
        />
      )}
    </>
  );
};

export default Home;

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import CardsGrid from "~frontend/src/components/cards-grid/cards-grid";
import Filters from "~frontend/src/components/filters/filters";
import InformationContainer from "~frontend/src/components/information-container/information-container";
import PreviewCard from "~frontend/src/components/preview-card/preview-card";
import SearchBar from "~frontend/src/components/search-bar/search-bar";
import Spinner from "~frontend/src/components/spinner/spinner";
import transformPageFromURL from "~frontend/src/components/utils/transform-page-from-url/transform-page-from-url";
import transformTypeOfMovieFromURL from "~frontend/src/components/utils/transform-type-of-movie-from-url/transform-type-of-movie-from-url";
import transformYearOfReleaseFromURL from "~frontend/src/components/utils/transform-year-of-release-from-url/transform-year-of-release-from-url";
import TypeOfMovie from "~frontend/src/constants/type-of-movie/type-of-movie";
import useGetMovies from "~frontend/src/hooks/use-get-movies/use-get-movies";
import useHandleError from "~frontend/src/hooks/use-handle-error/use-handle-error";
import useHomePageURLParametersUpdate from "~frontend/src/hooks/use-home-page-url-parameters-update/use-home-page-url-parameters-update";
import useSynchronizeURLWithStates from "~frontend/src/hooks/use-synchronize-url-with-states/use-synchronize-url-with-states";
import { Pagination } from "./home.styles";

const Home = () => {
  const [parameters] = useSearchParams();
  const pageURLParameter = parameters.get("page");
  const searchURLParameter = parameters.get("search");
  const typeOfMovieURLParameter = parameters.get("typeOfMovie");
  const yearOfReleaseURLParameter = parameters.get("yearOfRelease");
  const [search, setSearch] = useState(searchURLParameter ?? "");
  const [submittedSearch, setSubmittedSearch] = useState(
    searchURLParameter ?? "",
  );
  const [typeOfMovie, setTypeOfMovie] = useState<TypeOfMovie | null>(
    transformTypeOfMovieFromURL({
      typeOfMovieURLParameter,
    }),
  );
  const [yearOfRelease, setYearOfRelease] = useState<number | null>(
    transformYearOfReleaseFromURL({
      yearOfReleaseURLParameter,
    }),
  );
  const [page, setPage] = useState<null | number>(
    transformPageFromURL({ pageURLParameter }),
  );
  const {
    data: movies,
    isLoading,
    isError: isFetchError,
  } = useGetMovies({
    page,
    typeOfMovie,
    yearOfRelease,
    submittedSearch,
  });
  const {
    Search: searchedMovies,
    totalResults,
    Error: apiError,
    Response: response,
  } = movies ?? {};
  useSynchronizeURLWithStates({
    setSearch,
    setYearOfRelease,
    setSubmittedSearch,
    setPage,
    setTypeOfMovie,
  });
  useHomePageURLParametersUpdate({
    page,
    submittedSearch,
    typeOfMovie,
    yearOfRelease,
  });
  const isError = useHandleError({ isFetchError, apiError, response });
  const { t: translate } = useTranslation();
  return (
    <>
      <SearchBar
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
      {isLoading ? (
        <Spinner size="large" />
      ) : isError !== false ? (
        <InformationContainer
          description={
            !searchedMovies && !apiError
              ? translate("home.information-container.empty-state")
              : apiError
          }
        />
      ) : (
        <CardsGrid amountOfItems={searchedMovies?.length}>
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
                  linkState={{
                    page,
                    typeOfMovie,
                    yearOfRelease,
                    search: submittedSearch,
                  }}
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
        </CardsGrid>
      )}
      {totalResults && (
        <Pagination
          responsive
          onChange={(value) => {
            setPage(value);
            window.scrollTo(0, 0);
          }}
          showSizeChanger={false}
          hideOnSinglePage
          current={page ?? 1}
          total={parseInt(totalResults)}
        />
      )}
    </>
  );
};

export default Home;

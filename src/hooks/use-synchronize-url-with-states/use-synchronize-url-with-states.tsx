import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import transformPageFromURL from "~frontend/src/components/utils/transform-page-from-url/transform-page-from-url";
import transformTypeOfMovieFromURL from "~frontend/src/components/utils/transform-type-of-movie-from-url/transform-type-of-movie-from-url";
import transformYearOfReleaseFromURL from "~frontend/src/components/utils/transform-year-of-release-from-url/transform-year-of-release-from-url";
import type { UseSynchronizeURLWithStatesArguments } from "./use-synchronize-url-with-states.types";

const useSynchronizeURLWithStates = ({
  setSearch,
  setSubmittedSearch,
  setTypeOfMovie,
  setYearOfRelease,
  setPage,
}: UseSynchronizeURLWithStatesArguments) => {
  const [parameters] = useSearchParams();
  const pageURLParameter = parameters.get("page");
  const searchURLParameter = parameters.get("search");
  const typeOfMovieURLParameter = parameters.get("typeOfMovie");
  const yearOfReleaseURLParameter = parameters.get("yearOfRelease");
  useEffect(() => {
    setSearch(searchURLParameter ?? "");
    setSubmittedSearch(searchURLParameter ?? "");
    setTypeOfMovie(
      transformTypeOfMovieFromURL({
        typeOfMovieURLParameter,
      }),
    );
    setYearOfRelease(
      transformYearOfReleaseFromURL({
        yearOfReleaseURLParameter,
      }),
    );
    setPage(transformPageFromURL({ pageURLParameter }));
  }, [parameters]);
};

export default useSynchronizeURLWithStates;

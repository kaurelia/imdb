import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import filterNullable from "~frontend/src/components/utils/filter-nullable/filter-nullable";
import type { UseHomePageURLParametersUpdateArguments } from "./use-home-page-url-parameters-update.types";

const useHomePageURLParametersUpdate = ({
  page,
  submittedSearch,
  typeOfMovie,
  yearOfRelease,
}: UseHomePageURLParametersUpdateArguments) => {
  const [parameters, setParameters] = useSearchParams();
  useEffect(() => {
    setParameters(
      filterNullable({
        ...parameters,
        page: page ? `${page}` : submittedSearch ? 1 : null,
        search: submittedSearch || null,
        typeOfMovie: submittedSearch ? typeOfMovie : null,
        yearOfRelease: submittedSearch ? yearOfRelease : null,
      }) as Record<string, string>,
    );
  }, [page, submittedSearch, typeOfMovie, yearOfRelease]);
};

export default useHomePageURLParametersUpdate;

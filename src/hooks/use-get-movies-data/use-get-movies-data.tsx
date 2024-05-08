import { useQuery } from "@tanstack/react-query";
import { lowerCase } from "lodash";
import filterNullable from "~frontend/src/components/utils/filter-nullable/filter-nullable";
import omdbUrl from "~frontend/src/constants/omdb-url/omdb-url";
import type { IMDBResponse } from "~frontend/src/pages/home/home.types";
import type { UseGetMoviesArguments } from "./use-get-movies-data.types";

const useGetMovies = ({
  typeOfMovie,
  yearOfRelease,
  page,
  submittedSearch,
}: UseGetMoviesArguments) => {
  return useQuery({
    queryKey: [
      "search",
      typeOfMovie,
      yearOfRelease,
      submittedSearch,
      page ?? 1,
    ],
    enabled: Boolean(submittedSearch),
    queryFn: async () => {
      const urlParameters = new URLSearchParams(
        filterNullable({
          apiKey: import.meta.env.VITE_IMDB_API_KEY,
          s: submittedSearch,
          page: page ? `${page}` : null,
          type: typeOfMovie ? lowerCase(typeOfMovie) : null,
          y: yearOfRelease ? `${yearOfRelease}` : null,
        }) as Record<string, string>,
      ).toString();
      const response = await fetch(`${omdbUrl}?${urlParameters}`);
      return (await response.json()) as IMDBResponse;
    },
  });
};

export default useGetMovies;

import { useQuery } from "@tanstack/react-query";
import { isNil, lowerCase, omitBy } from "lodash";
import type { IMDBResponse } from "~frontend/src/pages/home/home.types";
import type { UseGetMoviesArguments } from "./use-get-movies.types";

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
        omitBy(
          {
            apiKey: import.meta.env.VITE_IMDB_API_KEY,
            s: submittedSearch,
            page: page ? `${page}` : null,
            type: typeOfMovie ? lowerCase(typeOfMovie) : null,
            y: yearOfRelease ? `${yearOfRelease}` : null,
          },
          isNil,
        ) as Record<string, string>,
      ).toString();
      const response = await fetch(`https://www.omdbapi.com/?${urlParameters}`);
      const jsonResponse = (await response.json()) as IMDBResponse;
      return jsonResponse;
    },
  });
};

export default useGetMovies;

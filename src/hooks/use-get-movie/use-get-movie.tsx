import { useQuery } from "@tanstack/react-query";
import { isNil, omitBy } from "lodash";
import type { MovieDetailsResponse } from "~frontend/src/pages/movie/movie.types";
import type { UseGetMovieArguments } from "./use-get-movie.types";

const useGetMovie = ({ id }: UseGetMovieArguments) => {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: async () => {
      const urlParameters = new URLSearchParams(
        omitBy(
          {
            apiKey: import.meta.env.VITE_IMDB_API_KEY,
            i: id,
            plot: "full",
          },
          isNil,
        ) as Record<string, string>,
      ).toString();
      const response = await fetch(`https://www.omdbapi.com/?${urlParameters}`);
      const jsonResponse = (await response.json()) as MovieDetailsResponse;
      return jsonResponse;
    },
  });
};

export default useGetMovie;

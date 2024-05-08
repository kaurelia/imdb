import { useQuery } from "@tanstack/react-query";
import filterNullable from "~frontend/src/components/utils/filter-nullable/filter-nullable";
import omdbUrl from "~frontend/src/constants/omdb-url/omdb-url";
import type { MovieDetailsResponse } from "~frontend/src/pages/movie/movie.types";
import type { UseGetMovieArguments } from "./use-get-movie-data.types";

const useGetMovie = ({ id }: UseGetMovieArguments) => {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: async () => {
      const urlParameters = new URLSearchParams(
        filterNullable({
          apiKey: import.meta.env.VITE_IMDB_API_KEY,
          i: id,
          plot: "full",
        }) as Record<string, string>,
      ).toString();
      const response = await fetch(`${omdbUrl}?${urlParameters}`);
      return (await response.json()) as MovieDetailsResponse;
    },
  });
};

export default useGetMovie;

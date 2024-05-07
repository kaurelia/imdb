import { useQuery } from "@tanstack/react-query";
import filterNullable from "~frontend/src/components/utils/filter-nullable/filter-nullable";
import type { MovieDetailsResponse } from "~frontend/src/pages/movie/movie.types";
import useGetLastViewedMovies from "../use-get-last-viewed-movies/use-get-last-viewed-movies";
import type { UseGetLastViewedMoviesDataArguments } from "./use-get-last-viewed-movies-data.types";

const useGetLastViewedMoviesData = ({
  id,
  isError,
}: UseGetLastViewedMoviesDataArguments) => {
  const lastViewedMovies = useGetLastViewedMovies();
  return useQuery({
    queryKey: ["last-viewed-movies", id, ...lastViewedMovies],
    enabled: isError === false,
    queryFn: async () => {
      const moviesDataPromises = lastViewedMovies.map(async (id) => {
        const urlParameters = new URLSearchParams(
          filterNullable({
            apiKey: import.meta.env.VITE_IMDB_API_KEY,
            i: id,
          }) as Record<string, string>,
        ).toString();
        const response = await fetch(
          `https://www.omdbapi.com/?${urlParameters}`,
        );
        return (await response.json()) as MovieDetailsResponse;
      });
      return Promise.all(moviesDataPromises);
    },
  });
};

export default useGetLastViewedMoviesData;

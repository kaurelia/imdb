import { useQuery } from "@tanstack/react-query";
import { isNil, omitBy } from "lodash";
import type { MovieDetailsResponse } from "~frontend/src/pages/movie/movie.types";
import useGetLastViewedMovies from "../use-get-last-viewed-movies/use-get-last-viewed-movies";
import type { UseGetLastViewedMoviesDataArguments } from "./use-get-last-viewed-movies-data.types";

const useGetLastViewedMoviesData = ({
  id,
}: UseGetLastViewedMoviesDataArguments) => {
  const lastViewedMovies = useGetLastViewedMovies();
  return useQuery({
    queryKey: ["last-viewed-movies", id, ...lastViewedMovies],
    queryFn: async () => {
      const moviesDataPromises = lastViewedMovies.map(async (id) => {
        const urlParameters = new URLSearchParams(
          omitBy(
            {
              apiKey: import.meta.env.VITE_IMDB_API_KEY,
              i: id,
            },
            isNil,
          ) as Record<string, string>,
        ).toString();
        const response = await fetch(
          `https://www.omdbapi.com/?${urlParameters}`,
        );
        const jsonResponse = (await response.json()) as MovieDetailsResponse;
        return jsonResponse;
      });
      return Promise.all(moviesDataPromises);
    },
  });
};

export default useGetLastViewedMoviesData;

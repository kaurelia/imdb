import { useEffect } from "react";
import useLastViewedMoviesStore from "~frontend/src/stores/last-viewed-movies-store/last-viewed-movies-store";
import type { UseSaveLastViewedMovieArguments } from "./use-save-last-viewed-movie.types";

const useSaveLastViewedMovie = ({
  id,
  isError,
}: UseSaveLastViewedMovieArguments) => {
  const { saveLastViewedMovie } = useLastViewedMoviesStore();
  useEffect(() => {
    isError === false && id && saveLastViewedMovie(id);
  }, [id, saveLastViewedMovie, isError]);
};

export default useSaveLastViewedMovie;

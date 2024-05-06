import { useEffect } from "react";
import useLastViewedMoviesStore from "~frontend/src/stores/last-viewed-movies-store/last-viewed-movies-store";
import type { UseSaveLastViewedMovieArguments } from "./use-save-last-viewed-movie.types";

const useSaveLastViewedMovie = ({ id }: UseSaveLastViewedMovieArguments) => {
  const { saveLastViewedMovie } = useLastViewedMoviesStore();
  useEffect(() => {
    id && saveLastViewedMovie(id);
  }, [id, saveLastViewedMovie]);
};

export default useSaveLastViewedMovie;

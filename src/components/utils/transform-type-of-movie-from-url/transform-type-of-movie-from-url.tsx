import TypeOfMovie from "~frontend/src/constants/type-of-movie/type-of-movie";
import type { TransformTypeOfMovieFromURLArguments } from "./transform-type-of-movie-from-url.types";

const transformTypeOfMovieFromURL = ({
  typeOfMovieURLParameter,
}: TransformTypeOfMovieFromURLArguments) => {
  return Object.values(TypeOfMovie).includes(
    typeOfMovieURLParameter as TypeOfMovie,
  )
    ? (typeOfMovieURLParameter as TypeOfMovie)
    : null;
};

export default transformTypeOfMovieFromURL;

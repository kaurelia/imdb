import type TypeOfMovie from "~frontend/src/constants/type-of-movie/type-of-movie";

export type UseGetMoviesArguments = {
  typeOfMovie: TypeOfMovie | null;
  yearOfRelease: number | null;
  submittedSearch: string;
  page: number | null;
};

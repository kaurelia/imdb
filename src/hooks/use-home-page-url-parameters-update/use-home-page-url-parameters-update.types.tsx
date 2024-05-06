import type TypeOfMovie from "~frontend/src/constants/type-of-movie/type-of-movie";

export type UseHomePageURLParametersUpdateArguments = {
  page: number | null;
  submittedSearch: string;
  typeOfMovie: TypeOfMovie | null;
  yearOfRelease: number | null;
};

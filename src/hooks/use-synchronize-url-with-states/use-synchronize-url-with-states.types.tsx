import type { Dispatch, SetStateAction } from "react";
import type TypeOfMovie from "~frontend/src/constants/type-of-movie/type-of-movie";

export type UseSynchronizeURLWithStatesArguments = {
  setSearch: Dispatch<SetStateAction<string>>;
  setSubmittedSearch: Dispatch<SetStateAction<string>>;
  setTypeOfMovie: Dispatch<SetStateAction<TypeOfMovie | null>>;
  setYearOfRelease: Dispatch<SetStateAction<number | null>>;
  setPage: Dispatch<SetStateAction<number | null>>;
};

import type { Dispatch, SetStateAction } from "react";
import type TypeOfMovie from "~frontend/src/constants/type-of-movie/type-of-movie";

export type FiltersProperties = {
  typeOfMovie: TypeOfMovie | null;
  yearOfRelease: number | null;
  setYearOfRelease: Dispatch<SetStateAction<number | null>>;
  setTypeOfMovie: Dispatch<SetStateAction<TypeOfMovie | null>>;
};

import type { Dispatch, SetStateAction } from "react";

export type SearchBarProperties = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  setSubmittedSearch: Dispatch<SetStateAction<string>>;
  setPage: Dispatch<SetStateAction<number | null>>;
};

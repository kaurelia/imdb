import { renderHook, waitFor } from "@testing-library/react";
import type { PropsWithChildren } from "react";
import { describe, expect, test } from "vitest";
import AppProvider from "~frontend/src/components/app-provider/app-provider";
import initializeTranslations from "~frontend/src/components/utils/initialize-translations/initialize-translations";
import TypeOfMovie from "~frontend/src/constants/type-of-movie/type-of-movie";
import allMoviesNoParameters from "~frontend/src/mocks/responses/all-movies-no-parameters";
import allMoviesWithParameters from "~frontend/src/mocks/responses/all-movies-with-parameters";
import allMoviesWithTypeParameter from "~frontend/src/mocks/responses/all-movies-with-type-parameter";
import allMoviesWithYearParameter from "~frontend/src/mocks/responses/all-movies-with-year-parameter";
import useGetMovies from "./use-get-movies-data";

describe("use-get-movies", async () => {
  const translations = await initializeTranslations();
  const Wrapper = ({ children }: PropsWithChildren) => {
    return <AppProvider translations={translations}>{children}</AppProvider>;
  };
  test("Returns movies when only submittedSearch is set", async () => {
    const { result } = renderHook(
      () => {
        return useGetMovies({
          submittedSearch: "movie",
          page: null,
          yearOfRelease: null,
          typeOfMovie: null,
        });
      },
      { wrapper: Wrapper },
    );
    await waitFor(() => {
      return expect(result.current.data).toEqual(allMoviesNoParameters);
    });
  });
  test("Returns movies when type of movie is set", async () => {
    const { result } = renderHook(
      () => {
        return useGetMovies({
          submittedSearch: "movie",
          page: 1,
          yearOfRelease: null,
          typeOfMovie: TypeOfMovie.Series,
        });
      },
      { wrapper: Wrapper },
    );
    await waitFor(() => {
      return expect(result.current.data).toEqual(allMoviesWithTypeParameter);
    });
  });
  test("Returns movies when year is set", async () => {
    const { result } = renderHook(
      () => {
        return useGetMovies({
          submittedSearch: "movie",
          page: 1,
          yearOfRelease: 2020,
          typeOfMovie: null,
        });
      },
      { wrapper: Wrapper },
    );
    await waitFor(() => {
      return expect(result.current.data).toEqual(allMoviesWithYearParameter);
    });
  });
  test("Returns movies when all parameters is set", async () => {
    const { result } = renderHook(
      () => {
        return useGetMovies({
          submittedSearch: "movie",
          page: 1,
          yearOfRelease: 2020,
          typeOfMovie: TypeOfMovie.Movie,
        });
      },
      { wrapper: Wrapper },
    );
    await waitFor(() => {
      return expect(result.current.data).toEqual(allMoviesWithParameters);
    });
  });
});

import { faker } from "@faker-js/faker";
import { fireEvent, render, screen } from "@testing-library/react";
import { useState } from "react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, test, vi } from "vitest";
import AppProvider from "~frontend/src/components/app-provider/app-provider";
import initializeTranslations from "~frontend/src/components/utils/initialize-translations/initialize-translations";
import SearchBar from "./search-bar";

const dataTestId = "search-bar";

describe("search-bar", async () => {
  const translations = await initializeTranslations();
  test.each([faker.word.sample(), ""])(
    `Check if search bar is setting setSubmittedSearch as the value in input during clicking search button`,
    (searchValue) => {
      const mockSetSubmittedSearch = vi.fn();
      const Application = () => {
        const [search, setSearch] = useState("");
        const [, setPage] = useState<null | number>(1);
        return (
          <AppProvider translations={translations}>
            <MemoryRouter>
              <SearchBar
                search={search}
                setSearch={setSearch}
                setSubmittedSearch={mockSetSubmittedSearch}
                setPage={setPage}
              />
            </MemoryRouter>
          </AppProvider>
        );
      };
      render(<Application />);
      const searchBarElement = screen.getByTestId(dataTestId);
      fireEvent.change(searchBarElement, {
        target: { value: searchValue },
      });
      fireEvent.click(screen.getByRole("button"));
      expect(mockSetSubmittedSearch).toHaveBeenCalledWith(searchValue);
      expect(mockSetSubmittedSearch).toHaveBeenCalledOnce();
    },
  );
  test(`Check if search bar is setting page to 1`, () => {
    const mockSetPage = vi.fn();
    const Application = () => {
      const [search, setSearch] = useState("");
      const [, setSubmittedSearch] = useState("");
      return (
        <AppProvider translations={translations}>
          <MemoryRouter>
            <SearchBar
              search={search}
              setSearch={setSearch}
              setSubmittedSearch={setSubmittedSearch}
              setPage={mockSetPage}
              search-bar
            />
          </MemoryRouter>
        </AppProvider>
      );
    };
    render(<Application />);
    const searchBarElement = screen.getByTestId(dataTestId);
    fireEvent.change(searchBarElement, {
      target: { value: "movie" },
    });
    fireEvent.click(screen.getByRole("button"));
    expect(mockSetPage).toHaveBeenCalledWith(1);
    expect(mockSetPage).toHaveBeenCalledOnce();
  });
});

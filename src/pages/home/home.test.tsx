import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import AppProvider from "~frontend/src/components/app-provider/app-provider";
import initializeTranslations from "~frontend/src/components/utils/initialize-translations/initialize-translations";
import Home from "./home";

describe("home", async () => {
  const translations = await initializeTranslations();
  test.each([1, 2])(
    `Check if pagination is set on %i page dynamically from URL`,
    async (page) => {
      const Application = (
        <AppProvider translations={translations}>
          <MemoryRouter
            initialEntries={[
              `/?${new URLSearchParams({
                search: "movie",
                page: `${page}`,
              }).toString()}`,
            ]}
          >
            <Home />
          </MemoryRouter>
        </AppProvider>
      );
      const { container } = render(Application);
      await waitFor(() => {
        const element = container.getElementsByClassName(
          `ant-pagination-item-${page}`,
        )[0];
        expect(element.matches(".ant-pagination-item-active")).toBeTruthy();
      });
    },
  );
  test("Display on start stage information container with properly label", () => {
    const Application = (
      <AppProvider translations={translations}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </AppProvider>
    );
    render(Application);
    expect(
      screen.getByText("home.information-container.empty-state"),
    ).toBeInTheDocument();
  });

  test('Display information container when error occurred from api" ', async () => {
    const Application = (
      <AppProvider translations={translations}>
        <MemoryRouter
          initialEntries={[
            `/?${new URLSearchParams({
              search: "movie",
              page: "1",
            }).toString()}`,
          ]}
        >
          <Home />
        </MemoryRouter>
      </AppProvider>
    );
    render(Application);
    await waitFor(() => {
      expect(screen.getAllByTestId("preview-card").length).toBeGreaterThan(0);
    });
  });
});

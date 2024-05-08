import { faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";
import { upperFirst } from "lodash";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import TypeOfMovie from "~frontend/src/constants/type-of-movie/type-of-movie";
import AppProvider from "../app-provider/app-provider";
import initializeTranslations from "../utils/initialize-translations/initialize-translations";
import PreviewCard from "./preview-card";

describe("preview-card", async () => {
  const translations = await initializeTranslations();
  const year = `${faker.number.int({ min: 1900, max: 2030 })}`;
  const title = faker.lorem.sentence({ max: 1, min: 1 });
  const type = faker.helpers.arrayElement(Object.values(TypeOfMovie));
  const Application = (
    <AppProvider translations={translations}>
      <MemoryRouter>
        <PreviewCard
          year={year}
          title={title}
          imdbID="random"
          poster={
            "https://upload.wikimedia.org/wikipedia/commons/5/56/Ma%C5%82y_kot_domowy.jpg"
          }
          type={type}
        />
      </MemoryRouter>
    </AppProvider>
  );
  test("Finds image", async () => {
    render(Application);
    expect(await screen.findByRole("img")).toBeInTheDocument();
  });
  test("Display the proper title", async () => {
    render(Application);
    expect(await screen.findByText(title)).toBeInTheDocument();
  });
  test("Display the proper year", async () => {
    render(Application);
    expect(await screen.findByText(year)).toBeInTheDocument();
  });
  test("Display the proper type", async () => {
    render(Application);
    expect(await screen.findByText(upperFirst(type))).toBeInTheDocument();
  });
});

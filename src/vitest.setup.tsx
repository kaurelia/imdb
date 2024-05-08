import * as matchers from "@testing-library/jest-dom/matchers";
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { setupServer } from "msw/node";
import { afterEach, expect, vi } from "vitest";
import { handlers as localesHandler } from "./mocks/locales";
import { handlers } from "./mocks/omdb-api";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => {
    return {
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    };
  }),
});

expect.extend(matchers);

export const server = setupServer(...handlers, ...localesHandler);
server.listen();

afterEach(() => {
  cleanup();
});

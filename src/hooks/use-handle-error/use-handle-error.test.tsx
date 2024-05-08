import { faker } from "@faker-js/faker";
import { renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import useHandleError from "./use-handle-error";

describe("use-handle-error", () => {
  test('Returns true on Response = "False" from API', () => {
    const { result } = renderHook(() =>
      useHandleError({
        apiError: faker.lorem.sentence(),
        isFetchError: faker.datatype.boolean(),
        response: "False",
      }),
    );
    expect(result.current).toBe(true);
  });
  test("Returns true if there's any API error", () => {
    const { result } = renderHook(() =>
      useHandleError({
        apiError: "No movies fou",
        isFetchError: faker.datatype.boolean(),
        response: faker.helpers.arrayElement(["False", "True"]),
      }),
    );
    expect(result.current).toBe(true);
  });
  test("Returns true if isFetchError is also true", () => {
    const { result } = renderHook(() =>
      useHandleError({
        apiError: faker.lorem.sentence(),
        isFetchError: true,
        response: faker.helpers.arrayElement(["False", "True"]),
      }),
    );
    expect(result.current).toBe(true);
  });
  test('Returns false if theres no apiError, isFetchError, and the Response is "True"', () => {
    const { result } = renderHook(() =>
      useHandleError({
        isFetchError: false,
        response: "True",
      }),
    );
    expect(result.current).toBe(false);
  });
  test("Returns null if theres no apiError, isFetchError, and the Response is undefined", () => {
    const { result } = renderHook(() =>
      useHandleError({
        isFetchError: false,
      }),
    );
    expect(result.current).toBe(null);
  });
});

import { describe, expect, test } from "vitest";
import placeholderImage from "~frontend/src/constants/placeholder-image/placeholder-image";
import getPoster from "./get-poster";

describe("get-poster", () => {
  test("Should return image placeholder on N/A", () => {
    expect(getPoster("N/A")).toBe(placeholderImage);
  });
  test("Should return the same image as provided if the value isn't N/A", () => {
    /** @see https://commons.wikimedia.org/wiki/Commons:Simple_media_reuse_guide */
    const image =
      "https://upload.wikimedia.org/wikipedia/commons/5/56/Ma%C5%82y_kot_domowy.jpg";
    expect(getPoster(image)).toBe(image);
  });
});

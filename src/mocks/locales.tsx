import { readFileSync } from "fs";
import { HttpResponse, http } from "msw";
import { join } from "path";

const localesFolder = join(
  __dirname,
  "..",
  "..",
  "public",
  "locales",
  "en.json",
);

export const handlers = ["en", "pl"].map((locale) => {
  return http.get(`/locales/${locale}.json`, () => {
    const file = readFileSync(join(localesFolder, `${locale}.json`));
    return HttpResponse.json(file.toString());
  });
});

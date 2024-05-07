import type { Router } from "@remix-run/router";
import type { i18n } from "i18next";

export type AppProperties = {
  router: Router;
  translations: i18n;
};

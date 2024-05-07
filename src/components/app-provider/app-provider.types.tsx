import type { PropsWithChildren } from "react";
import type { AppProperties } from "../app/app.types";

export type AppProviderProperties = PropsWithChildren<
  Pick<AppProperties, "translations">
>;

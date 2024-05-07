import type { PropsWithChildren } from "react";
import type { GridProperties } from "./cards-grid.styles";

export type CardsGridProperties = PropsWithChildren<
  Pick<GridProperties, "withoutMinHeight"> & {
    amountOfItems?: number;
  }
>;

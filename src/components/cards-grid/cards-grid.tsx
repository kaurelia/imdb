import { Grid, Wrapper } from "./cards-grid.styles";
import type { CardsGridProperties } from "./cards-grid.types";

const CardsGrid = ({
  children,
  withoutMinHeight,
  amountOfItems,
}: CardsGridProperties) => {
  const isForSmallAmount = Boolean(amountOfItems && amountOfItems < 5);
  return (
    <Wrapper isForSmallAmount={isForSmallAmount}>
      <Grid
        isForSmallAmount={isForSmallAmount}
        withoutMinHeight={withoutMinHeight}
      >
        {children}
      </Grid>
    </Wrapper>
  );
};

export default CardsGrid;

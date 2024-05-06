import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import type { AppProperties } from "../app/app";
import GlobalStyles from "../global-styles/global-styles";

type AppWrapperProperties = Pick<AppProperties, "router">;

const AppWrapper = ({ router }: AppWrapperProperties) => {
  return (
    <>
      <GlobalStyles />
      <Suspense fallback={<></>}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
};

export default AppWrapper;

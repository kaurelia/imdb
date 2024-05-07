import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import useHandleI18NextCache from "~frontend/src/hooks/use-handle-i18next-cache/use-handle-i18next-cache";
import GlobalStyles from "../global-styles/global-styles";
import type { AppWrapperProperties } from "./app-wrapper.types";

const AppWrapper = ({ router }: AppWrapperProperties) => {
  useHandleI18NextCache();
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

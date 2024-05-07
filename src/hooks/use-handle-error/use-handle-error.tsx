import { useMemo } from "react";
import type { UseHandleErrorArguments } from "./use-handle-error.types";

const useHandleError = ({
  apiError,
  isFetchError,
  response,
}: UseHandleErrorArguments) => {
  return useMemo(() => {
    return apiError === undefined && !isFetchError && response === undefined
      ? null
      : Boolean(apiError || isFetchError || response === "False");
  }, [apiError, isFetchError, response]);
};

export default useHandleError;

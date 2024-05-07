import type { TransformPageFromURLArguments } from "./transform-page-from-url.types";

const transformPageFromURL = ({
  pageURLParameter,
}: TransformPageFromURLArguments) => {
  const pageParameterAsNumber = parseInt(pageURLParameter ?? "");
  return isNaN(pageParameterAsNumber) ? null : pageParameterAsNumber;
};

export default transformPageFromURL;

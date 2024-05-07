import type { TransformYearOfReleaseFromURL } from "./transform-year-of-release-from-url.types";

const transformYearOfReleaseFromURL = ({
  yearOfReleaseURLParameter,
}: TransformYearOfReleaseFromURL) => {
  const yearOfReleaseURLParameterAsNumber = parseInt(
    yearOfReleaseURLParameter ?? "",
  );
  return isNaN(yearOfReleaseURLParameterAsNumber)
    ? null
    : yearOfReleaseURLParameterAsNumber;
};

export default transformYearOfReleaseFromURL;

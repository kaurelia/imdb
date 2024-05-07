import { isNil, omitBy } from "lodash";

const filterNullable = (object: Record<string, unknown>) => {
  return omitBy(object, isNil) as Record<string, string>;
};

export default filterNullable;

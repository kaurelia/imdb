import { z as zod } from "zod";

/** All valid prefixes for IMDB ID
 *
 * @see https://www.wikidata.org/wiki/Property:P345
 */
const validIMDBPrefixes = new Set(["tt", "nm", "co", "ev", "ch", "ni"]);

const movieIdValidator = zod
  .string()
  .length(9)
  .refine(
    (data) => {
      /**
       * The first two letters are the prefixes in the IMDB ID
       *
       * @see https://www.wikidata.org/wiki/Property:P345
       */
      const prefix = data.substring(0, 2);
      return validIMDBPrefixes.has(prefix);
    },
    {
      message: "The prefix doesn't match with any valid for IMDB ID",
    },
  )
  .refine(
    (data) => {
      /**
       * The rest of the IMDB ID are the numbers
       *
       * @see https://www.wikidata.org/wiki/Property:P345
       */
      const parsedNumbers = parseInt(data.substring(3, 9));
      return !isNaN(parsedNumbers);
    },
    {
      message: "The numbers which are part of the IMDB ID are invalid",
    },
  );

export default movieIdValidator;

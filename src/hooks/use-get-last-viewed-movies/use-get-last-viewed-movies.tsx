import { useMemo } from "react";
import amountOfLastViewedMoviesToDisplay from "~frontend/src/constants/amount-of-last-viewed-movies-to-display/amount-of-last-viewed-movies-to-display";
import useLastViewedMoviesStore from "~frontend/src/stores/last-viewed-movies-store/last-viewed-movies-store";

const useGetLastViewedMovies = () => {
  const { lastViewedMovies } = useLastViewedMoviesStore();
  return useMemo(() => {
    return (
      lastViewedMovies
        /** Slice omits the first element, because the first element in the array is always the current movie page */
        .slice(1, amountOfLastViewedMoviesToDisplay + 1)
      /*.filter((value) => {
          try {
            //movieIdValidator.parse(value);
            return true;
          } catch (error) {
            return false;
          }
        }) as string[]*/
    );
  }, [lastViewedMovies]);
};

export default useGetLastViewedMovies;

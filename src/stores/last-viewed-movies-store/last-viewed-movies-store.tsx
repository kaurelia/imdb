import store from "store2";
import { create } from "zustand";
import amountOfLastViewedMoviesToDisplay from "~frontend/src/constants/amount-of-last-viewed-movies-to-display/amount-of-last-viewed-movies-to-display";

export type UseLastViewedMoviesStoreArguments = {
  lastViewedMovies: string[];
  //getLastViewedMovies: () => UseLastViewedMoviesStoreArguments["lastViewedMovies"];
  saveLastViewedMovie: (id: string) => void;
};

const useLastViewedMoviesStore = create<UseLastViewedMoviesStoreArguments>(
  (set) => {
    const lastViewedMovies: unknown = store.get("lastViewed");
    return {
      lastViewedMovies: Array.isArray(lastViewedMovies)
        ? (lastViewedMovies.slice(
            0,
            amountOfLastViewedMoviesToDisplay + 1,
          ) as string[])
        : [],
      saveLastViewedMovie: (id: string) => {
        set(({ lastViewedMovies, ...rest }) => {
          const lastViewedWithoutRepetitions = new Set(lastViewedMovies);
          let lastViewedWithoutRepetitionsAsArray = [
            ...lastViewedWithoutRepetitions,
          ];
          if (
            lastViewedWithoutRepetitions.has(id) &&
            lastViewedWithoutRepetitionsAsArray.indexOf(id) !== 0
          ) {
            lastViewedWithoutRepetitions.delete(id);
            const lastViewedWithoutRepetitionsAfterDelete = [
              ...lastViewedWithoutRepetitions,
            ];
            lastViewedWithoutRepetitionsAfterDelete.unshift(id);
            lastViewedWithoutRepetitionsAsArray =
              lastViewedWithoutRepetitionsAfterDelete;
          } else if (!lastViewedWithoutRepetitions.has(id)) {
            if (
              lastViewedWithoutRepetitions.size >=
              amountOfLastViewedMoviesToDisplay + 1
            ) {
              lastViewedWithoutRepetitionsAsArray.pop();
            }
            lastViewedWithoutRepetitionsAsArray.unshift(id);
          }
          store.set("lastViewed", lastViewedWithoutRepetitionsAsArray);
          return {
            ...rest,
            lastViewedMovies: lastViewedWithoutRepetitionsAsArray,
          };
        });
      },
    };
  },
);

export default useLastViewedMoviesStore;

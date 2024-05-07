import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import useGetLastViewedMoviesData from "~frontend/src/hooks/use-get-last-viewed-movies-data/use-get-last-viewed-movies-data";
import { LastViewedHeader } from "~frontend/src/pages/movie/movie.styles";
import CardsGrid from "../cards-grid/cards-grid";
import PreviewCard from "../preview-card/preview-card";
import type { LastViewedMoviesProperties } from "./last-viewed-section.types";

const LastViewedSection = ({ id, isError }: LastViewedMoviesProperties) => {
  const { data: lastViewedMovies } = useGetLastViewedMoviesData({
    id,
    isError,
  });
  const { state } = useLocation();
  const { t: translation } = useTranslation();
  return (
    lastViewedMovies &&
    lastViewedMovies?.length && (
      <>
        <LastViewedHeader>
          {translation("movie.last-viewed-movies.header")}
        </LastViewedHeader>
        <CardsGrid amountOfItems={lastViewedMovies.length} withoutMinHeight>
          {lastViewedMovies?.map(
            ({
              imdbID,
              Poster: poster,
              Title: title,
              Type: type,
              Year: year,
            }) => {
              return (
                <PreviewCard
                  key={`movie-last-viewed-${imdbID}`}
                  imdbID={imdbID}
                  title={title}
                  poster={poster}
                  type={type}
                  year={year}
                  linkState={state}
                />
              );
            },
          )}
        </CardsGrid>
      </>
    )
  );
};

export default LastViewedSection;

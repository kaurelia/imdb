import { Descriptions as AntdDescriptions } from "antd";
import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import InformationContainer from "~frontend/src/components/information-container/information-container";
import LastViewedSection from "~frontend/src/components/last-viewed-section/last-viewed-section";
import Spinner from "~frontend/src/components/spinner/spinner";
import filterNullable from "~frontend/src/components/utils/filter-nullable/filter-nullable";
import getPoster from "~frontend/src/components/utils/get-poster/get-poster";
import useGetMovie from "~frontend/src/hooks/use-get-movie-data/use-get-movie-data";
import useHandleError from "~frontend/src/hooks/use-handle-error/use-handle-error";
import useIsMobile from "~frontend/src/hooks/use-is-mobile/use-is-mobile";
import useSaveLastViewedMovie from "~frontend/src/hooks/use-save-last-viewed-movie/use-save-last-viewed-movie";
import {
  ContentWrapper,
  Descriptions,
  Header,
  Image,
  LeftCircleOutlined,
  Paragraph,
  Rate,
  Tag,
  Wrapper,
} from "./movie.styles";

const { Item } = AntdDescriptions;

const Movie = () => {
  const { t: translate } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
  const {
    data: movieDetails,
    isError: isFetchError,
    isLoading,
  } = useGetMovie({ id });
  const {
    imdbRating,
    Poster: poster,
    Title: title,
    imdbVotes,
    Actors: actors,
    Awards: awards,
    BoxOffice: boxOffice,
    Country: country,
    DVD: dvd,
    Director: director,
    Genre: genre,
    Language: language,
    Metascore: metaScore,
    Plot: plot,
    Production: production,
    Rated: rated,
    Released: released,
    Runtime: runtime,
    Type: type,
    Website: website,
    Year: year,
    Writer: writer,
    Error: apiError,
    Response: response,
  } = movieDetails ?? {};
  const {
    Error: _error,
    Response: _response,
    ...movieDetailsExcludingInformation
  } = movieDetails ?? {};
  const isError = useHandleError({ response, apiError, isFetchError });
  useSaveLastViewedMovie({ id, isError });
  const fixedTitle = useMemo(() => {
    const titleWithDash: string = ` - ${title}`;
    return `IMDB viewer${title ? titleWithDash : ""}`;
  }, [title]);
  const labelsWrapper = useMemo(() => {
    return [
      [translate("movie.details.imdb-votes"), imdbVotes],
      [translate("movie.details.actors"), actors],
      [translate("movie.details.box-office"), boxOffice],
      [translate("movie.details.country"), country],
      [translate("movie.details.dvd"), dvd],
      [translate("movie.details.director"), director],
      [translate("movie.details.genre"), genre],
      [translate("movie.details.language"), language],
      [translate("movie.details.meta-score"), metaScore],
      [translate("movie.details.production"), production],
      [translate("movie.details.runtime"), runtime],
      [translate("movie.details.website"), website],
      [translate("movie.details.year"), year],
      [translate("movie.details.writer"), writer],
    ];
  }, [
    translate,
    imdbVotes,
    actors,
    awards,
    boxOffice,
    country,
    dvd,
    director,
    genre,
    language,
    metaScore,
    production,
    rated,
    released,
    runtime,
    website,
    year,
    writer,
  ]);
  const isMobile = useIsMobile();
  return (
    <>
      <Helmet>
        <title>{fixedTitle}</title>
        <meta name="og:title" content={fixedTitle} />
      </Helmet>
      <LeftCircleOutlined
        onClick={() => {
          if (state) {
            const urlParameters = new URLSearchParams(
              filterNullable(state) as Record<string, string>,
            ).toString();
            navigate(`/?${urlParameters}`);
          } else {
            navigate(-1);
          }
        }}
      />
      {isLoading ? (
        <Spinner size="large" />
      ) : isError !== false ? (
        <InformationContainer
          description={
            !Object.keys(movieDetailsExcludingInformation).length && !apiError
              ? translate("movie.information-container.not-found-details")
              : apiError
          }
        />
      ) : (
        <>
          <Wrapper>
            <Image src={getPoster(poster)} alt={title} />
            <ContentWrapper>
              <Header>{title}</Header>
              <Rate
                disabled
                allowHalf
                value={parseFloat(imdbRating ?? "0") / 2}
              />
              <Tag color="blue">{type}</Tag>
              {plot !== "N/A" && <Paragraph>{plot}</Paragraph>}
            </ContentWrapper>
          </Wrapper>
          <Descriptions column={isMobile ? 2 : 4} bordered>
            {labelsWrapper.map(([translation, value]) => {
              return (
                <Item key={translation} span={2} label={translation}>
                  {value}
                </Item>
              );
            })}
          </Descriptions>
          <LastViewedSection id={id} isError={isError} />
        </>
      )}
    </>
  );
};

export default Movie;

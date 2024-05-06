import { Descriptions as AntdDescriptions } from "antd";
import { useParams } from "react-router-dom";
import PreviewCard from "~frontend/src/components/preview-card/preview-card";
import useGetLastViewedMoviesData from "~frontend/src/hooks/use-get-last-viewed-movies-data/use-get-last-viewed-movies-data";
import useGetMovie from "~frontend/src/hooks/use-get-movie/use-get-movie";
import useSaveLastViewedMovie from "~frontend/src/hooks/use-save-last-viewed-movie/use-save-last-viewed-movie";
import { Wrapper as LastViewedMoviesWrapper } from "../home/home.styles";
import {
  ContentWrapper,
  Descriptions,
  Image,
  LastViewedHeader,
  Rate,
  Wrapper,
} from "./movie.styles";

const { Item } = AntdDescriptions;

const Movie = () => {
  const { id } = useParams();
  useSaveLastViewedMovie({ id });
  const { data: movieDetails } = useGetMovie({ id });
  const { data: lastViewedMovies } = useGetLastViewedMoviesData({
    id,
  });
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
    Metascore: metascore,
    Plot: plot,
    Production: production,
    Rated: rated,
    Released: released,
    Runtime: runtime,
    Type: type,
    Website: website,
    Year: year,
    Writer: writer,
  } = movieDetails ?? {};
  return (
    <>
      <Wrapper>
        <Image src={poster} alt={title} />
        <ContentWrapper>
          <h1>{title}</h1>
          <p> {plot}</p>
        </ContentWrapper>
      </Wrapper>
      <Descriptions bordered>
        {imdbRating && (
          <Item span={2} label="Imdb rating">
            <Rate disabled allowHalf value={parseFloat(imdbRating) / 2} />
          </Item>
        )}
        <Item span={2} label="Imdb votes">
          {imdbVotes}
        </Item>
        <Item span={2} label="Actors">
          {actors}
        </Item>
        <Item span={2} label="Awards">
          {awards}
        </Item>
        <Item span={2} label="BoxOffice">
          {boxOffice}
        </Item>
        <Item span={2} label="Country">
          {country}
        </Item>
        <Item span={2} label="DVD">
          {dvd}
        </Item>
        <Item span={2} label="Director">
          {director}
        </Item>
        <Item span={2} label="Genre">
          {genre}
        </Item>
        <Item span={2} label="Language">
          {language}
        </Item>
        <Item span={2} label="Metascore">
          {metascore}
        </Item>

        <Item span={2} label="Production">
          {production}
        </Item>
        <Item span={2} label="Rated">
          {rated}
        </Item>
        <Item span={2} label="Released">
          {released}
        </Item>
        <Item span={2} label="Runtime">
          {runtime}
        </Item>
        <Item span={2} label="Type">
          {type}
        </Item>
        <Item span={2} label="Website">
          {website}
        </Item>
        <Item span={2} label="Year">
          {year}
        </Item>
        <Item span={2} label="Writer">
          {writer}
        </Item>
      </Descriptions>
      <LastViewedHeader>Last viewed movies</LastViewedHeader>
      <LastViewedMoviesWrapper withoutMinHeight>
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
              />
            );
          },
        )}
      </LastViewedMoviesWrapper>
    </>
  );
};

export default Movie;

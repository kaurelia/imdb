import { http, HttpResponse } from "msw";
import omdbUrl from "../constants/omdb-url/omdb-url";
import allMoviesNoParameters from "./responses/all-movies-no-parameters";
import allMoviesWithParameters from "./responses/all-movies-with-parameters";
import allMoviesWithTypeParameter from "./responses/all-movies-with-type-parameter";
import allMoviesWithYearParameter from "./responses/all-movies-with-year-parameter";
import movieDetails from "./responses/movie-details";

const errorResponse = {
  Response: "False",
  Error: "No movies",
};

export const handlers = [
  http.get(omdbUrl, ({ request }) => {
    const url = new URL(request.url);
    const imdbID = url.searchParams.get("i");
    const search = url.searchParams.get("s");
    const year = url.searchParams.get("y");
    const type = url.searchParams.get("type");
    if (search) {
      if (search === "error") {
        return HttpResponse.json(errorResponse);
      }
      if (type && year) {
        return HttpResponse.json(allMoviesWithParameters);
      }
      if (type) {
        return HttpResponse.json(allMoviesWithTypeParameter);
      }
      if (year) {
        return HttpResponse.json(allMoviesWithYearParameter);
      }
      return HttpResponse.json(allMoviesNoParameters);
    }
    if (imdbID) {
      return HttpResponse.json(movieDetails);
    }
    return HttpResponse.json(errorResponse);
  }),
];

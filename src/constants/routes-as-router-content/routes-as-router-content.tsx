import { lazy, type FunctionComponent, type LazyExoticComponent } from "react";
import type { RouteObject } from "react-router-dom";

const Home: LazyExoticComponent<FunctionComponent> = lazy(() => {
  return import("~frontend/src/pages/home/home");
});

const Movie: LazyExoticComponent<FunctionComponent> = lazy(() => {
  return import("~frontend/src/pages/movie/movie");
});

const routesAsRouterContent: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
  },
];

export default routesAsRouterContent;

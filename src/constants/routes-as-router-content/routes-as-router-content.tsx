import type { RouteObject } from "react-router-dom";
import Home from "~frontend/src/pages/home/home";
import Movie from "~frontend/src/pages/movie/movie";

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

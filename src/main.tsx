import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import App from "./components/app/app.tsx";
import routesAsRouterContent from "./constants/routes-as-router-content/routes-as-router-content.tsx";

if (process.env.NODE_ENV === "development") {
  const whyDidYouRenderPromise = import(
    "@welldone-software/why-did-you-render"
  );
  const reactLibraryPromise = import("react");
  const [{ default: whyDidYouRender }, react] = await Promise.all([
    whyDidYouRenderPromise,
    reactLibraryPromise,
  ]);
  whyDidYouRender(react, {
    trackAllPureComponents: true,
    trackHooks: true,
    logOnDifferentValues: true,
  });
}

const root = document.getElementById("root");

if (root) {
  const router = createBrowserRouter(routesAsRouterContent);
  createRoot(root).render(
    <StrictMode>
      <App router={router} />
    </StrictMode>,
  );
}

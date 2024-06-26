import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import App from "./components/app/app.tsx";
import initializeTranslations from "./components/utils/initialize-translations/initialize-translations.tsx";
import isDevelopment from "./constants/is-development/is-development.tsx";
import routesAsRouterContent from "./constants/routes-as-router-content/routes-as-router-content.tsx";

const runApp = async () => {
  if (isDevelopment) {
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
    const initializeTranslationsPromise = initializeTranslations();
    const router = createBrowserRouter(routesAsRouterContent);
    const translations = await initializeTranslationsPromise;
    createRoot(root).render(
      <StrictMode>
        <App translations={translations} router={router} />
      </StrictMode>,
    );
  }
};

runApp();

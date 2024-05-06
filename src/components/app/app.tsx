import type { Router } from "@remix-run/router";
import AppProvider from "../app-provider/app-provider";
import AppWrapper from "../app-wrapper/app-wrapper";

export type AppProperties = {
  router: Router;
};

const App = ({ router }: AppProperties) => {
  return (
    <AppProvider>
      <AppWrapper router={router} />
    </AppProvider>
  );
};

export default App;

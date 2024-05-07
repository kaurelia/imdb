import AppProvider from "../app-provider/app-provider";
import AppWrapper from "../app-wrapper/app-wrapper";
import type { AppProperties } from "./app.types";

const App = ({ router, translations }: AppProperties) => {
  return (
    <AppProvider translations={translations}>
      <AppWrapper router={router} />
    </AppProvider>
  );
};

export default App;

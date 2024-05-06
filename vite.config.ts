import legacy from "@vitejs/plugin-legacy";
import reactPluginBabel from "@vitejs/plugin-react";
import reactPluginSWC from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      mode === "development"
        ? reactPluginSWC({
            jsxImportSource: "@welldone-software/why-did-you-render",
            plugins: [["@swc/plugin-emotion", {}]],
          })
        : reactPluginBabel({
            jsxImportSource: "@emotion/react",
            babel: {
              plugins: ["@emotion"],
            },
          }),
      mkcert(),
      legacy(),
      tsconfigPaths(),
    ],
  };
});

import type { Linter } from "eslint";
import sonarjs from "eslint-plugin-sonarjs";

const config: Linter.Config = {
  ...sonarjs.configs.recommended,
  env: {
    ...sonarjs.configs.recommended.env,
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:testing-library/react",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsdoc/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "plugin:node/recommended",
    "plugin:lodash/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    tsconfigRootDir: __dirname,
    ecmaVersion: "latest",
    project: "./tsconfig.json",
    sourceType: "module",
  },
  plugins: [
    "testing-library",
    "react",
    "@typescript-eslint",
    "eslint-plugin-tsdoc",
    "jsdoc",
    "prettier",
    "sonarjs",
    "@emotion",
    "lodash",
    "no-loops",
    "react-refresh",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    ...sonarjs.configs.recommended.rules,
    "testing-library/no-node-access": "off",
    "testing-library/no-container": "off",
    "arrow-body-style": ["error", "always"],
    "no-loops/no-loops": "error",
    "lodash/prefer-lodash-method": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "jsx-a11y/aria-role": [
      2,
      {
        ignoreNonDOM: true,
      },
    ],
    "lodash/import-scope": "off",
    "lodash/chaining": "off",
    "lodash/prefer-startswith": "off",
    "max-params": ["error", 1],
    "@typescript-eslint/no-inferrable-types": "off",
    "no-invalid-this": "error",
    "react/react-in-jsx-scope": "off",
    "no-console": "warn",
    "react-hooks/exhaustive-deps": "off",
    "no-nested-ternary": "off",
    "node/no-unsupported-features/es-syntax": "off",
    "node/no-missing-require": "off",
    "node/no-missing-import": "off",
    "node/no-extraneous-import": "off",
    "node/no-unsupported-features/es-builtins": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "node/no-unpublished-import": "off",
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};

export default config;

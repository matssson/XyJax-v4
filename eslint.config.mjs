import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";

export default defineConfig([
  { ignores: ["build/**", "node_modules/**", "test/**"] },
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    extends: [js.configs.recommended],
    languageOptions: { globals: globals.browser },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
]);

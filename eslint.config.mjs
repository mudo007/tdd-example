import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import jestPlugin from "eslint-plugin-jest";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    plugins: { js },
    extends: ["js/recommended"]
  },
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { globals: globals.node }
  },
  tseslint.configs.recommended,
  eslintPluginPrettier,
  {
    files: ["**/*.{test,spec}.ts", "**/*.{test,spec}.js"],
    ...jestPlugin.configs["flat/recommended"]
  },
  {
    files: ["**/*.{test,spec}.ts", "**/*.{test,spec}.js"],
    ...jestPlugin.configs["flat/styles"]
  },
  {
    rules: {
      "capitalized-comments": ["error", "always"],
      "no-useless-escape": "off"
    }
  }
]);

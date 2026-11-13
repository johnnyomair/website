import { defineConfig } from "lint-staged/config";

export default defineConfig({
  "src/**/*.{ts,tsx,js,jsx}": "eslint --cache",
  "**/*.{json,css,scss,md}": "prettier --check",
});

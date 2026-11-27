import { defineConfig } from "lint-staged/config";

export default defineConfig({
  "**/*.{astro,css,json,md}": "prettier --check",
});

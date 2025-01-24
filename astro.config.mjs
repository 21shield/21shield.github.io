// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

export default defineConfig({
  integrations: [react()],
  site: "https://21shield.github.io/",
  base: "/21shield.github.io",
});

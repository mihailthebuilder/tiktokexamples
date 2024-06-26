import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://tiktokexamples.com",
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes("/newsletter/"),
    }),
    tailwind(),
  ],
});

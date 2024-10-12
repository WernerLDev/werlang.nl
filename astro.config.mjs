// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://werlang.nl",
  markdown: {
    shikiConfig: {
      theme: "dracula"
    }
  }
});

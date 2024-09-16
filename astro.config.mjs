import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://tiny-concha-85139d.netlify.app/",
  integrations: [preact()]
});
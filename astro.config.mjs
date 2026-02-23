import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://prabalbanerjee.xyz',
  output: 'static',
  integrations: [sitemap()],
});
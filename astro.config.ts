import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';
import edgeoneAdapter from '@edgeone/astro';

export default defineConfig({
  // used to generate images
  site: 'https://brutal.edgeone.app/',
  adapter: edgeoneAdapter(),
  trailingSlash: 'ignore',
  integrations: [sitemap(), UnoCSS({ injectReset: true })],
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
});

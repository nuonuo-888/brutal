import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';
import edgeoneAdapter from '@edgeone/astro';

export default defineConfig({
  // used to generate images
  site:
    process.env.VERCEL_ENV === 'production'
      ? 'https://brutal.elian.codes/'
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/`
        : 'https://localhost:3000/',
  adapter: edgeoneAdapter(),
  trailingSlash: 'ignore',
  integrations: [sitemap(), UnoCSS({ injectReset: true })],
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
});

// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://binkhozin.github.io',
  base: '/porto-lp-skincare',
  vite: {
    plugins: [tailwindcss()]
  }
});

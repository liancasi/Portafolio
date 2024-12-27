import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://liancasi.github.io',
  base: '/Portafolio',
  integrations: [tailwind()],
  outDir: './dist',
});
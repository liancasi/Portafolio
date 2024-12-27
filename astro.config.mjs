import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://liancasi.github.io',
  base: '/Portafolio',
  build: {
    assets: 'assets'
  },
  experimental: {
    assets: true
  }
});
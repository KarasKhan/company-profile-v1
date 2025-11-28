import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // Ganti 'nama-project-anda' dengan nama unik, misal: tukang-ngoding-balikpapan
  site: 'https://tukang-ngoding-balikpapan.netlify.app',
  
  integrations: [mdx(), sitemap(), tailwind()]
});
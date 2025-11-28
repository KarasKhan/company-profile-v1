import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite'; // Kita pakai versi Vite (v4)

// https://astro.build/config
export default defineConfig({
  // Ganti dengan URL Netlify Anda nanti
  site: 'https://tukang-ngoding-balikpapan.netlify.app',
  
  integrations: [mdx(), sitemap()],
  
  // Konfigurasi Tailwind v4 masuk di sini
  vite: {
    plugins: [tailwindcss()],
  },
});
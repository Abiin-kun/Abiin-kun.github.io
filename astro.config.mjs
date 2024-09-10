import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';




import vercel from '@astrojs/vercel/serverless';


export default defineConfig({
  site: "https://abhinn.vercel.app",
  integrations: [mdx(), sitemap()],
  output: 'server',

  adapter: vercel(),
});
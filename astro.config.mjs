import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';




import vercel from '@astrojs/vercel/serverless';


export default defineConfig({

  integrations: [mdx(), sitemap()],
  output: 'server',

  adapter: vercel(),
});
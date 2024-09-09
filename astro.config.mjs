import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import svelte from '@astrojs/svelte';


import vercel from '@astrojs/vercel';


export default defineConfig({

  integrations: [mdx(), sitemap(), svelte()],
  output: 'server',

  adapter: vercel(),
});
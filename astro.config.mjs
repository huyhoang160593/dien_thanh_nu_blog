import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import UnoCSS from '@unocss/astro';
import presetUno from '@unocss/preset-uno';
import { defineConfig } from 'astro/config';



// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap(), UnoCSS({
    injectReset: true,
    presets: [presetUno()]
  })],
});

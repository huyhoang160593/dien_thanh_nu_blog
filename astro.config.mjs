import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import UnoCSS from '@unocss/astro';
import presetTypography from "@unocss/preset-typography";
import presetUno from '@unocss/preset-uno';
import presetWebFonts from '@unocss/preset-web-fonts';
import { defineConfig } from 'astro/config';



// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap(), UnoCSS({
    injectReset: true,
    presets: [presetUno(), presetTypography(), presetWebFonts({
      fonts: {
        rowdies: 'Rowdies'
      }
    })]
  })],
});

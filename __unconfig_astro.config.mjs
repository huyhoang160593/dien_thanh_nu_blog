
let __unconfig_data;
let __unconfig_stub = function (data = {}) { __unconfig_data = data };
__unconfig_stub.default = (data = {}) => { __unconfig_data = data };
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import UnoCSS from '@unocss/astro';
import presetTypography from "@unocss/preset-typography";
import presetUno from '@unocss/preset-uno';
import presetWebFonts from '@unocss/preset-web-fonts';
import { defineConfig } from 'astro/config';



// https://astro.build/config
const __unconfig_default =  defineConfig({
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

if (typeof __unconfig_default === "function") __unconfig_default(...[]);export default __unconfig_data;
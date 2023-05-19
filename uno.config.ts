import { defineConfig, presetIcons, presetTypography, presetUno, presetWebFonts } from "unocss";

export default defineConfig({
  presets: [
    presetUno({}),
    presetTypography(),
    presetIcons({}),
    presetWebFonts({
      fonts: {
        rowdies: 'Rowdies'
      }
    })
  ]
})
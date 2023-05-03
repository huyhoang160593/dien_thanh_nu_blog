import { defineConfig, presetTypography, presetUno, presetWebFonts } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        rowdies: 'Rowdies'
      }
    })
  ]
})
// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  css: ["~/assets/styles/main.css"],
   build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@nuxtjs/google-fonts',
   
  ],
  googleFonts: {
    families: {
      'Roboto': true,
   
    },
    display: 'swap' 
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})

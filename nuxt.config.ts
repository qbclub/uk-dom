// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  ssr: false,  // hashMode работает только с этим
  router: {
    options: {
      hashMode: true,
    },
  },
  runtimeConfig: {
    public: {
      // baseUrl: process.env.NUXT_PUBLIC_SITE_URL,
      API_URL: process.env.API_URL, // Публичная переменная
      opaId: process.env.opaId, // id предприятия на госуслугах
    },
    // apiKey: process.env.API_KEY, // Приватная переменная на сервере
  },
  
  css: ["~/assets/styles/main.css"],

  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    ssr: {
      noExternal: ['vuetify'],
    },
  },
  modules: [
   
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
   
   
   
  ],

  plugins: [
    { src: '~/plugins/vue-pdf-embed.js', mode: 'client' }
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
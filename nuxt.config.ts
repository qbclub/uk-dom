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
  modules: ['@nuxtjs/google-fonts', '@pinia/nuxt', '@vite-pwa/nuxt'],

  plugins: [
    { src: '~/plugins/vue-pdf-embed.js', mode: 'client' }
  ],
  googleFonts: {
    families: {
      'Roboto': true,
   
    },
    display: 'swap' 
  },
  pwa: {
    registerType: 'autoUpdate',
    includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'images/apple-touch-icon.png'],
    manifest: {
      name: 'УК Дом',
      short_name: 'УК Дом',
      description: 'УК Дом. Глазов. Удмуртия',
      theme_color: '#ffffff',
      background_color: "#ffffff",
      display: "standalone",
      icons: [
        {
          src: 'android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'apple-touch-icon.png',
          sizes: '180x180',
          type: 'image/png',
        },

        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        }
      ]
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
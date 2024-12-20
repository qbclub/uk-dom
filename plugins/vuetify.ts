// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      themes: {
        light: {
          colors: {
            primary: '#0F609A',
            accent: '#ff6363ff',
            secondary:"#0A0F24"
          },
        },
      },
    },
    display: {
      mobileBreakpoint: 'md',
      thresholds: {
        xs: 0,
        sm: 340,
        md: 600,
        lg: 800,
        xl: 1280,
      },
    },
  })
  app.vueApp.use(vuetify)
})



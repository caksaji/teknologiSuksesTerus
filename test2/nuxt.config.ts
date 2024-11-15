// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: ['~/assets/style/_allBundle.less'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'v-wave/nuxt',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    'nuxt-aos'
  ],
  alias: { pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs' },
  tailwindcss: { viewer: false },
  googleFonts: {
    families: {
      Poppins: {
        wght: [500]
      },
      Raleway: {
        wght: [400, 500, 600, 700]
      }
    },
    display: 'swap'
  },
  pinia: {
    storesDirs: ['./stores/**']
  }
})

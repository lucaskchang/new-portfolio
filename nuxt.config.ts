// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    'nuxt-gtag',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Nuxt Boilerplate',
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        {
          rel: 'icon',
          type: 'image/ico',
          href: '/favicon.ico',
        },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2025-5-20',

  eslint: {
    config: {
      stylistic: true,
    },
  },

  gtag: {
    id: 'G-QNLZ5NY7HH',
  },
});
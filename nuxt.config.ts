// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss', 
    '@nuxt/image', 
    '@nuxt/icon', 
    '@pinia/nuxt', 
    '@nuxtjs/i18n', 
    'shadcn-nuxt'
  ],

  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
      link: [
        { rel: "icon", type: "image/ico", sizes: "32x32", href: "/favicon.ico" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/32.png" },
        { rel: "apple-touch-icon", type: "image/png", sizes: "180x180", href: "/180.png" },
      ]
    },
  },

  i18n: {
    locales: [
      { code: 'en', language: 'en-US', file: 'en.json', name: 'English', icon: 'openmoji:flag-united-states' },
      { code: 'am', language: 'am-AM', file: 'am.json', name: 'Armenian', icon: 'openmoji:flag-armenia' },
      { code: 'ru', language: 'ru-RU', file: 'ru.json', name: 'Russian', icon: 'openmoji:flag-russia' }
    ],
    lazy: true,
    langDir: './locales',
    strategy: 'prefix_except_default',
    defaultLocale: 'ru',
    baseUrl: process.env.ORIGIN
  },

  pinia: {
    storesDirs: ['./store/**'],
  },

  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },

  css: ['~/assets/css/tailwind.css'],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
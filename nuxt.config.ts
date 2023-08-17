import meta from './config/meta'
import script from './config/script'

import link from './config/link'


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'TruthGPT',
      meta,
      link,
      script,
      bodyAttrs: { id: 'page-top'},
    },
  },
  modules: [
    'nuxt-simple-sitemap',
    '@nuxtjs/i18n',
  ],
  i18n: {
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'en',
        iso: 'en-US'
      },
      {

        code: 'vi',
        iso: 'vi-VN'
      },
    ],
    defaultLocale: 'en',
    vueI18n: './config/i18n/i18n.config.ts'
  },
  site: {
    url: 'https://tgpt.guru',
  },
  css: ['/assets/styles/main.scss'],
})

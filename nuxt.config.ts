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
  css: ['/assets/styles/main.scss']
})

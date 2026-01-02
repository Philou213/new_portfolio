// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxtjs/i18n', '@nuxt/fonts', '@nuxt/content'],

  i18n: {
    strategy: 'prefix_except_default',
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json', icon: 'circle-flags:en-us' },
      { code: 'fr', language: 'fr-FR', name: 'Français', file: 'fr.json', icon: 'circle-flags:fr' }
    ],
    defaultLocale: 'en',
    detectBrowserLanguage: false,
  },

  fonts: {
    families: [
      {
        name: 'Manrope',
        provider: 'google',
        weights: [400, 500, 600, 700],
      },
  ],
},
})
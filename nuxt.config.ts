// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  
  // Static generation settings
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true
    }
  },
  
  // Static site generation
  ssr: true,
  app: {
    head: {
      title: 'BestSoftGuide - Software Reviews & Recommendations',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Discover the best software solutions with our comprehensive reviews and recommendations.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})

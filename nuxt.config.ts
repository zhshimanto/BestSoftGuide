// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    // Enable compatibility features for Node.js v18
    payloadExtraction: false
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  
  // Content module configuration
  content: {
    documentDriven: false,
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3
      }
    }
  },
  css: ['~/assets/css/main.css'],
  
  // Static generation settings optimized for Node.js v22
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      failOnError: false, // Don't fail the build if a page fails to render
      routes: [
        '/',
        '/reviews',
        '/categories',
        '/blog'
      ]
    },
    routeRules: {
      // Cache all pages for better performance
      '/**': { swr: 60 * 60 * 24 }
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

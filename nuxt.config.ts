// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    // Enable compatibility features for Node.js v18
    payloadExtraction: false
  },
  
  // Google Analytics configuration
  runtimeConfig: {
    public: {
      googleAnalyticsId: 'G-1WT7R3JBL2'
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  
  // Content module configuration
  content: {},
  css: ['~/assets/css/main.css'],
  
  // Static generation settings optimized for Node.js v22
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true, // Enable crawling links to discover all pages
      failOnError: false, // Don't fail the build if a page fails to render
      routes: [
        '/',
        '/reviews',
        '/categories',
        '/blog',
        '/categories/email-marketing',
        '/reviews/email-marketing/convertkit-review',
        '/reviews/email-marketing/convertkit-review-2025',
        '/reviews/communication/discord-review',
        '/blog/best-productivity-apps-2025',
        '/blog/email-marketing-automation-guide',
        '/reviews/productivity/evernote-review',
        '/reviews/writing/grammarly-review',
        '/reviews/writing/jasper-review',
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
        { rel: 'icon', type: 'image/webp', href: '/images/bestsoftguide/Best-soft-favicon.webp' }
      ]
    }
  }
})

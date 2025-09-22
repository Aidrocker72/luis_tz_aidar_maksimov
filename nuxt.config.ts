// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  compatibilityDate: '2024-12-18',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'https://cataas.com'
    }
  },
  typescript: {
    typeCheck: true,
    strict: true
  },
  css: [
    '@/assets/styles/main.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@use '@/assets/styles/_variables.scss' as *;"
        }
      }
    }
  },
  app: {
    head: {
      title: 'Sticker Cats | Nuxt 4',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Animated sticker demo with cats' }
      ]
    }
  }
})


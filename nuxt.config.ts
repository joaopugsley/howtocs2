// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "nuxt-icon", "@nuxt/image"],
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  image: {
    format: ['webp'],
  },
  content: {},
  devtools: { enabled: false },
});
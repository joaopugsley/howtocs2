// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "nuxt-icon"],
  content: {},
});

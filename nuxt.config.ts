// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "primevue/resources/themes/lara-light-green/theme.css",
    "primeicons/primeicons.css",
  ],
  modules: ["nuxt-primevue", "@nuxtjs/tailwindcss"],
  primevue: {
    cssLayerOrder: "primevue",
    options: { ripple: true, inputStyle: "outlined" },
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
});

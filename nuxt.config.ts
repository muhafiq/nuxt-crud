// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: "Auth and CRUD With Nuxt",
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  runtimeConfig: {
    JWT_ACCCESS_SECRET_KEY: process.env.ACCESS_SECRET_KEY,
    JWT_REFRESH_SECRET_KEY: process.env.REFRESH_SECRET_KEY,
  },
});

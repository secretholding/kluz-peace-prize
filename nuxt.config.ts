import { defineNuxtConfig } from "nuxt/config";
import { resolve } from "path";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  server: {
    allowedHosts: ['.kluzprize.org', '.netlify.app']
  },
  app: {
    head: {
      title: "Kluz Prize for PeaceTech",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { property: "og:url", content: "https://www.kluzprize.org" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Kluz Prize for PeaceTech" },
        { property: "og:description", content: "Unlocking the Power of PeaceTech" },
        { property: "og:image", content: "/assets/images/og-image.jpg" },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "twitter:domain", content: "kluzprize.org" },
        { property: "twitter:url", content: "https://www.kluzprize.org/" },
        { name: "twitter:title", content: "Kluz Prize for PeaceTech" },
        { name: "twitter:description", content: "Unlocking the Power of PeaceTech" },
        { name: "twitter:image", content: "/assets/images/og-image.jpg" }
      ],
      script: [],
      link: [
        { rel: "stylesheet", href: "https://use.typekit.net/tsd2tcy.css" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" },
        { rel: "icon", type: "image/png", href: "/assets/images/favicon.png" }
      ],
    }
  },
  nitro: {
    preset: 'netlify-static'
  },
  css: [
    '@ccmdesign/ccm-ds/assets/css/main.scss',
    '/public/assets/css/theme.css',
    '/public/assets/css/styles.css'
  ],
  components: {
    "dirs": [
      {
        "path": resolve(__dirname, 'node_modules/@ccmdesign/ccm-ds/ccm-ds/03-objects'),
        "global": true
      },
      {
        "path": resolve(__dirname, 'node_modules/@ccmdesign/ccm-ds/ccm-ds/04-components'),
        "global": true
      },
      {
        "path": resolve(__dirname, 'node_modules/@ccmdesign/ccm-ds/ccm-ds/05-modules'),
        "global": true
      },
      {
        "path": resolve(__dirname, 'node_modules/@ccmdesign/ccm-ds/ccm-ds/06-sections'),
        "global": true
      },
      {
        "path": '~/components/sections/',
        "global": true
      },
      {
        "path": '~/components/modules/',
        "global": true
      },
      "~/components",
    ]
  },
  modules: [
    '@nuxt/content'
  ]
});




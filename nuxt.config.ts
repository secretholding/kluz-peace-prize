import { defineNuxtConfig } from "nuxt/config";
import { resolve } from "path";
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // Add Vite configuration with allowedHosts as the error message suggests
  vite: {
    server: {
      allowedHosts: [
        '.localhost',
        '.kluzprize.org',
        '.netlify.app',
        'devserver-testing-2025--kluz-prize.netlify.app'
      ],
      hmr: {
        protocol: 'wss',
        clientPort: 443,
        port: 443
      }
    }
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
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-F3H5C6TG39',
          async: true
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F3H5C6TG39');
          `,
          type: 'text/javascript'
        }
      ],
      link: [
        { rel: "preconnect", href: "https://use.typekit.net" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
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
    '@nuxt/content',
    '@nuxt/image'
  ],
  image: {
    quality: 80,
    format: ['webp', 'jpg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  }
});
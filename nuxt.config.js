import global from "./utils/global";
import getRoutes from "./utils/getRoutes";
import getSiteMeta from "./utils/getSiteMeta";

const meta = getSiteMeta();

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  // ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: "bg",
    },
    script: [
      // Google Analytics Code
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-5P4ZK4W8C9",
        async: true,
      },
      { src: "/js/analitics.js" },
      // Google Add Sense - Реклами
      {
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8365005414967197",
        async: true,
        crossorigin: "anonymous",
      },
    ],
    title: global.siteTitle,

    meta: [
      {
        name: "google-site-verification",
        content: "cxhSEt9LsuBdDO9G8hqQY4ta8Y8P2renRpirqF9bfdE",
      },
      ...meta,
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { property: "og:site_name", content: global.siteName || "" },
      {
        hid: "description",
        name: "description",
        content: global.siteDesc || "",
      },
      { name: "format-detection", content: "telephone=no" },
      { name: "apple-mobile-web-app-title", content: global.siteName || "" },
      { name: "application-name", content: global.siteName || "" },
      { name: "msapplication-TileColor", content: "#603cba" },
      { name: "theme-color", content: "#333333" },
      { property: "og:image:width", content: "740" },
      { property: "og:image:height", content: "300" },
      { name: "twitter:site", content: global.siteName || "" },
      { name: "twitter:card", content: global.mainImage },
    ],
    link: [
      { hid: "canonical", rel: "canonical", href: global.siteUrl },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
      {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg",
        color: "#333333",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/custom.css",
    "~/assets/css/grid.css",
    "~/assets/css/aside.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "plugins/vue-cookies-consent.js",
      mode: "client",
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "nuxt-font-loader",
    // Optimized and Easy way to use SVG files in Nuxt.js
    "@nuxtjs/svg-sprite",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
  ],

  fontLoader: {
    url: "/fonts/font-face.css",
  },

  svgSprite: {
    input: "~/assets/svg/icons/",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  // pwa: {},

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxt/content",
    // A Nuxt.js module thats inject a middleware to generate a robots.txt
    "@nuxtjs/robots",
    // Add the Nuxt sitemap module
    "@nuxtjs/sitemap",
    // Social Sharing Buttons to NuxtJS: https://www.zemna.net/articles/how-to-add-social-sharing-buttons-to-nuxtjs/
    "vue-social-sharing/nuxt",
  ],
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: "prism-themes/themes/prism-a11y-dark.css",
      },
    },
    nestedProperties: ["author.name"],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  // Sitemap Configuration
  sitemap: {
    hostname: global.siteUrl, // https://www.mspase.com
    routes() {
      return getRoutes();
    },
  },
  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
  },

  generate: {
    // fallback: true,
    routes() {
      return getRoutes();
    },
  },
};

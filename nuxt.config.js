import getRoutes from "./utils/getRoutes";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: "bg",
      // prefix: "og: http://ogp.me/ns#",
    },
    title: "MSpase Blog",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      { name: "apple-mobile-web-app-title", content: "Mspase Blog" },
      { name: "application-name", content: "Mspase Blog" },
      { name: "msapplication-TileColor", content: "#603cba" },
      { name: "theme-color", content: "#333333" },
    ],
    link: [
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
  css: ["~/assets/css/custom.css", "~/assets/css/grid.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["nuxt-font-loader"],

  fontLoader: {
    url: "/fonts/font-face.css",
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    // Optimized and Easy way to use SVG files in Nuxt.js
    "@nuxtjs/svg-sprite",
    // A Nuxt.js module thats inject a middleware to generate a robots.txt
    "@nuxtjs/robots",
    // Add the Nuxt sitemap module
    "@nuxtjs/sitemap",
  ],
  svgSprite: {
    input: "~/assets/svg/icons/",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: "prism-themes/themes/prism-material-oceanic.css",
      },
    },
    nestedProperties: ["author.name"],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  // Sitemap Configuration
  sitemap: {
    hostname: "https://mspase.com", // https://www.mspase.com
    routes() {
      return getRoutes();
    },
  },
  generate: {
    fallback: true,
  },
};

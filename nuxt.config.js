
require('./data/meta.js')
// require('dotenv').config()


module.exports = {

  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'bg'
    },
    title: info.siteTitle,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: "google-site-verification", content: info.GOOGLE_SITE_VERIFICATION},
      { hid: "author", name: "author", content: info.URL},
      { hid: "publisher", name: "publisher", content: info.URL},
      { hid: "apple-mobile-web-app-title", name: "apple-mobile-web-app-title", content: info.siteTitle},
      { hid: 'description', name: 'description', content: info.siteDescription || '' },
      // og - properties
      { hid: 'og:site_name', content: "MAYKS.DEV"},
      { hid: 'og:title', name: 'og:title', content: info.siteTitle || ''},
      { hid: 'og:description', name: 'og:description', content: info.siteDescription || ''},
      { hid: "og:type", name: "og:type", content: "website"},
      { hid: "og:url", name: "og:url", content: info.URL},
      { hid: "og:locale", name: "og:locale", content: "bg_BG"},
      //  ------------------  og - IMAGE properties 1200 px--------------------------------
      { hid: 'og:image', name: 'og:image', content: '/mayks-logo-og.jpg'},
      { hid: 'og:image:width', name: 'og:image:width', content: '1200'},
      { hid: 'og:image:height', name: 'og:image:height', content: '1200'},
      //  ------------------  og - IMAGE properties 1200 px x 630 px--------------------------------
      { hid: 'og:image', name: 'og:image', content: '/mayks-logo-facebook.jpg'},
      { hid: 'og:image:width', name: 'og:image:width', content: '1200'},
      { hid: 'og:image:height', name: 'og:image:height', content: '630'},
      //  ------------------  og - IMAGE properties 300 px x 157 px--------------------------------
      { hid: 'og:image', name: 'og:image', content: '/mayks-logo-twitter.jpg'},
      { hid: 'og:image:width', name: 'og:image:width', content: '300'},
      { hid: 'og:image:height', name: 'og:image:height', content: '157'},
      // <meta name="keywords" content="Reviews, Showtimes, DVDs, Photos, Message Boards, User Ratings, Synopsis, Trailers, Credits" />

      // --------------------------- TWITTER -----------------------------------------
      // { hid: "twitter:card", name: "twitter:card", content: "summary_large_image"},
      // { hid: "twitter:site", name: "twitter:site", content: "@mayks1"},
      // { hid: "twitter:creator", name: "twitter:creator", content: "@mayks1"},
      { hid: "twitter:title", name: "twitter:title", content: info.siteTitle},
      { hid: "twitter:description", name: "twitter:description", content: info.siteDescription},
      { hid: "twitter:image", name: "twitter:image", content: "/mayks-logo-twitter.jpg"}
      // ----------------------------  FACEBOOK --------------------------------------
      // {property: 'fb:app_id', content: '12873892173892'},
      
    ],

    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: "180x180", href: '/apple-touch-icon.png' },
      { rel: 'icon',     type:  'image/png',  sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon',     type:  'image/png',  sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest',  href: '/site.webmanifest' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
 loading: { color: '#fa923f', height: '4px', duration: 5000 },
 loadingIndicator: { name: 'circle', color: '#fa923f' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/page-animation.css',
    '~/assets/sass/main.sass',
    'vue-agile/dist/VueAgile.css',
    // 'highlight.js/styles/dracula.css'
    // 'highlight.js/styles/tomorrow-night-blue.css'
    
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/date-filter',
    // '~/plugins/filters.js',
    // '~/plugins/components',
    { src: './plugins/vue-agile.js', mode: 'client' },

  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    // ['@nuxtjs/dotenv', { filename: envFileName }]
    '@nuxtjs/dotenv'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',

    // Share variables, mixins, functions across all style files (no @import needed)
    '@nuxtjs/style-resources',

    // Storyblok Module
    [
      'storyblok-nuxt',
      {
        accessToken: '1fFtXg88AU6FzSVvlrc14Att',
        cacheProvider: 'memory'
      }
    ],

    // A simple static asset compression module for Nuxt that runs Gzip and Brotli compression during the build process.
    
    ["nuxt-compress", {
        gzip: {
          cache: true
        },
        brotli: {
          threshold: 10240
        }
      }
    ],

    // Automatically generate or serve dynamic sitemap.xml
    '@nuxtjs/sitemap',

    // A NuxtJS module thats inject a middleware to generate a robots.txt file
    '@nuxtjs/robots',

  ],

  // Sitemap Module configuration
  sitemap: {
    hostname: 'https://mayks.dev',
    lastmod: new Date(),
    gzip: true,
  },

  styleResources: {
      sass: '~assets/sass/variables.sass'
  },

  env: {
    contactUrl: `https://api.mayks.dev/api/forms/submit/contact?token=${info.FORMS_TOKEN}`
  },

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  // */
  // axios: {
  //   baseURL: process.env.API_URL
  // },

  /*
  ** Generate Dynamic Routes configuration
  */
  generate: {
  
  },
  
  /*
  ** Deploy configuration UNUBO
  */
 server: {
  port: process.env.PORT || 3000,
  host: '0.0.0.0'
 
 },


  /*
  ** Build configuration
  */
 build: {
  /*
  ** You can extend webpack config here
  */
  extend (config, ctx) {
  }
 }
  
  // transition: {
  //   name: 'fade',
  //   mode: 'out-in'
  // },
}

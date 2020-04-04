// require('dotenv').config()
// import axios from 'axios'
// const collect = require('collect.js')

/*
** Function dynamicRoutes() return the Dynamic Routes and pass them to Generate configuration 
*/
// const dynamicRoutes = async () => {

//   // Fetching posts
//   const resForPosts         = await axios.get(process.env.API_POSTS)
//   const resForCategories    = await axios.get(process.env.API_CATEGORIES)

//   const routesForPosts      = resForPosts.data.entries.map(post => {
//     return {
//      route: `/blog/${post.title_slug}`,
//      payload: post
//     }
//   })

//   const rotesForCategories  = resForCategories.data.entries.map(category => {
//     return {
//       route: `/category/${category.name}`,
//       payload: category
//     }
//   })

//   const routes = routesForPosts.concat(rotesForCategories)

//   return routes

// }

module.exports = {

  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'bg'
    },
    title: process.env.SITE_TITLE,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: "google-site-verification", content: "3dcMi8kx8atA-j5Ydfbbq5S54BC0KTtwhCNRIPrKqh8"},
      { hid: "author", name: "author", content: process.env.URL},
      { hid: "publisher", name: "publisher", content: process.env.URL},
      { hid: "apple-mobile-web-app-title", name: "apple-mobile-web-app-title", content: process.env.SITE_TITLE},
      { hid: 'description', name: 'description', content: process.env.SITE_DESCRIPTION || '' },
      // og - properties
      { hid: 'og:site_name', content: "MAYKS.DEV"},
      { hid: 'og:title', name: 'og:title', content: process.env.SITE_TITLE || ''},
      { hid: 'og:description', name: 'og:description', content: process.env.SITE_DESCRIPTION || ''},
      { hid: "og:type", name: "og:type", content: "website"},
      { hid: "og:url", name: "og:url", content: process.env.URL},
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
      { hid: "twitter:title", name: "twitter:title", content: "Mayks - Изграждане на Уеб Страници"},
      { hid: "twitter:description", name: "twitter:description", content: "Идивидуални уеб системи по задание на клиента. Изграждане на статични и динамични страници."},
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
        accessToken: process.env.STORYBLOK_API,
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
    contactUrl: `${process.env.BASE_URL}/api/forms/submit/contact?token=${process.env.FORMS_TOKEN}`
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
    // routes: async () => {
    //   let { data } = await axios.post(process.env.POSTS_URL,
    //   JSON.stringify({
    //       filter: { published: true },
    //       sort: {_created:-1},
    //       populate: 1
    //     }),
    //   {
    //     headers: { 'Content-Type': 'application/json' }
    //   })
  
    //   const collection = collect(data.entries)
  
    //   let tags = collection.map(post => post.tags)
    //   .flatten()
    //   .unique()
    //   .map(tag => {
    //     let payload = collection.filter(item => {
    //       return collect(item.tags).contains(tag)
    //     }).all()
  
    //     return {
    //       route: `category/${tag}`,
    //       payload: payload
    //     }
    //   }).all()
  
    //   let posts = collection.map(post => {
    //     return {
    //       route: `blog/${post.title_slug}`,
    //       payload: post
    //     }
    //   }).all()
  
    //   return posts.concat(tags)
    // }
    // routes: dynamicRoutes
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      // Create SourceMap in Developer Mode
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
      
    },
    
    // analyze: true,
  },
  
  // transition: {
  //   name: 'fade',
  //   mode: 'out-in'
  // },
}

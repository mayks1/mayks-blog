<template>  
  <div class="wrapper">


    <main>
      <section>
        
        <div class="content-box">

          <div class="post">
            <figure>
              <img class="post-image" :src="story.content.image" alt="Снимка на публикацията">
            </figure>
            <div class="post-date">
              <img class="post-icon" src="~/assets/images/calendar-outline.svg" alt="Calendar Icon">
              <time class="time" :datetime="story.published_at | date">{{ story.published_at | date }}</time>
              <img class="dot" src="~/assets/images/circle.svg">
              <span v-for="(category, key) in story.content.category" :key="key"><a class="category" :href="'/category/' + category.slug" :title="'Категория: ' + category.name">{{category.name}}</a></span>
            </div>
            <div class="post-text">
              <h1 class="post-title">{{story.content.title}}</h1>
              <div class="post-content" v-html="body"></div>
            </div>
          </div>

        </div>
      </section>
    </main>
    
    <SideBar />
  </div>
</template> 

<script>

import marked from 'marked'
import SideBar from '~/components/sections/SideBar'

export default {

  components: {
        SideBar
    },

  head () {
    return {
      title: this.story.content.title,
      meta: [
        { hid: 'description', name: 'description', content: process.env.SITE_DESCRIPTION },
        { hid: "og:url", name: "og:url", content: process.env.URL + `/blog/${this.$route.params.tag}`},
        { hid: "og:type", name: "og:type", content: "blog"},
        { hid: 'og:title', name: 'og:title', content: this.story.content.title},
        { hid: 'og:description', name: 'og:description', content: process.env.SITE_DESCRIPTION },
        { hid: 'og:image', name: 'og:image', content: this.story.content.image},
        { hid: "twitter:title", name: "twitter:title", content: this.story.content.title},
        { hid: "twitter:description", name: "twitter:description", content: process.env.SITE_DESCRIPTION },
        { hid: "twitter:image", name: "twitter:image", content: this.story.content.image }

      ]
    }
  },

    // data() {
    //   return {
    //       story: { content: { body: '' } }
    //   }
    // },
    computed: {
      body() {
        return marked(this.story.content.content)
      }
    },
    
    mounted () {
    // use the bridge to listen to events
        this.$storybridge.on(['input', 'published', 'change'], (event) => {
        if (event.action == 'input') {
            if (event.story.id === this.story.id) {
            this.story.content = event.story.content
            }
        } else {
            // window.location.reload()
            this.$nuxt.$router.go({
            path: this.$nuxt.$router.currentRoute,
            force: true,
            })
        }
        })
    },

    asyncData (context) {

        let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
    // Load the JSON from the API
        return context.app.$storyapi.get(`cdn/stories/blog/${context.params.slug}`, {
        version: version,
        starts_with: 'blog/',
        resolve_relations: 'category',
        cv: context.store.state.cacheVersion
        }).then((res) => {
        return res.data
        }).catch((res) => {
        if (!res.response) {
            console.error(res)
            context.error({ statusCode: 404, message: 'Failed to receive content form api' })
        } else {
            console.error(res.response.data)
            context.error({ statusCode: res.response.status, message: res.response.data })
        }
        })
  }

}
</script>

<style lang="sass" scoped>
.content-box
  text-align: center
  h5
    margin-bottom: 1.5rem
  h6
    font-weight: 300
    color: $primary-color
    padding: .7rem
  ul
    +break(tablet)
      display: flex
      justify-content: space-evenly

.wrapper
  position: relative
  display: flex  
  +break(tablet)
    display: block

main 
  flex: 3
  margin-right: 5rem
  +break(tablet)
    margin-right: 0
  
.post
  text-align: center
  &-image
      max-height: 28rem
      +responsive
  &-text 
      padding: 2rem
  &-title
      color: $primary-color
      padding-bottom: 2rem
  &-content
    text-align: -webkit-auto
    ::v-deep
        h1
          font-size: calc(1.25vw + 14px)
          line-height: calc(calc(1.85vw + 25px))
          font-weight: 500
        h2
          font-size: 1.7em
        h3
          font-size: 2.7rem
          font-weight: 400
        p,li 
          margin: .5rem
          font-weight: 300
          line-height: 23px
  &-date
    margin-top: 2rem
  .time,
  .category
      font-size: 1.3rem
      padding: 0 .7rem
  .dot
      +box(0.7rem, auto)
  .category
      font-weight: 400
      text-transform: uppercase
      color: $primary-color
      &:hover 
          color: $white-color
  &-icon
      +box(1.5rem, auto)

::v-deep pre 
          display: block
          overflow-x: auto
          width: 97%
          max-width: 100%
          overflow-wrap: normal
          padding: 1.2rem
          margin: 1.5rem 0 1.5rem
          font-size: 18px
          line-height: 23px
          color: $code-font-color
          word-break: break-all
          word-wrap: break-word
          background-color: $code-bg-color
          border: 1px solid #333
          border-radius: 4px
          +break(xs)
            font-size: 14px
            line-height: 22px

</style>
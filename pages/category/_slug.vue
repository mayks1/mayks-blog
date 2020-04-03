<template>  
  <div class="wrapper">

    <main class="main">

      <div class="content-box">
        <h1 class="main-headline">Публикации в Категория "{{ stories[0].content.category[0].name }}"</h1>
      </div>

      <section v-for="(post, key) in stories" :key="key">
        <div class="content-box">

            <PostPreview :post="post" />

        </div>
      </section>
    </main>
    
    <SideBar />


  </div>
</template> 

<script>
import PostPreview from '~/components/PostPreview'
import SideBar from '~/components/sections/SideBar'

export default {
  components: {
    PostPreview,
    SideBar
  },

  head () {
      return {
        title: `Публикации в Категория ${this.stories[0].content.category[0].name}`,
        meta: [
          // { hid: 'description', name: 'description', content: this.post.meta },
          { hid: "og:url", name: "og:url", content: process.env.URL + `/category/${this.$route.params.tag}`},
          { hid: 'og:title', name: 'og:title', content: `Публикации в Категория ${this.stories[0].content.category[0].name}`},
          // { hid: 'og:description', name: 'og:description', content: this.post.meta || ''},
          { hid: "twitter:title", name: "twitter:title", content: `Публикации в Категория ${this.stories[0].content.category[0].name}`},
          // { hid: "twitter:description", name: "twitter:description", content: this.post.meta || ''},
        ]
      }
  },

    asyncData (context) {

        let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
    // Load the JSON from the API
        return context.app.$storyapi.get('cdn/stories', {
        version: version,
        starts_with: 'blog/',
        "filter_query": {
          "category": {
            "in_array": context.params.slug
          }
        },
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

.main 
  flex: 3
  margin-right: 5rem
  +break(tablet)
    margin-right: 0
  &-headline
      font-size: calc(1.85vw + 15px)
      line-height: calc(calc(1.85vw + 20px))
      color: $primary-color

</style>

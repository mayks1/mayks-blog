<template>
  <main>
    <div class="section-title">
      <h1>Услуги</h1>
    </div>
    <Slider />
    <div class="section-title">
      <h1>Последно от блога</h1>
    </div>
    <!-- Section LASTBLOG -->
    <section class="section-blog">
      <div class="posts-container">
          <article class="post-box" v-for="(post, key) in stories" :key="key">
            <div class="content-box">

                <PostPreview :post="post" />

            </div> 
          </article>
      </div> 
    </section>
    <!-- END of Section LASTBLOG -->
    <Contact />
  </main>
</template>

<script>
import axios from 'axios'
import Slider from "~/components/sections/Slider"
import Contact from "~/components/sections/Contact"
import PostPreview from '~/components/PostPreview'

export default {

  components: {
    Slider,
    PostPreview,
    Contact,
  },

  // data() {
  //   return {
  //     posts: []
  //   }
  // },

 asyncData (context) {

        let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
        // Load the JSON from the API
        return context.app.$storyapi.get('cdn/stories', {
            version: version,
            starts_with: 'blog/',
            resolve_relations: 'category',
            per_page: 2
        }).then((res) => { 
            return res.data
        }).catch((res) => {
            context.error({ statusCode: res.response.status, message: res.response.data })
        })
    }
  
}
</script>

<style lang="sass" scoped>

.section-title
    text-align: center
    h1
        font-weight: 700
        font-size: calc(1.85vw + 20px) //3rem
        line-height: calc(calc(1.85vw + 20px)*1.3)
        color: $primary-color
        text-transform: uppercase 

.posts-container
    display: flex
    +break(tablet)
        display: block

.post-box
    flex: 1
    &:nth-child(1)
        margin-right: 3rem
    +break(tablet)
        margin: 0 0 4rem 0
        &:nth-child(1)
            margin: 0 0 4rem 0
        // &:nth-child(2)
        //     margin: 0 0 -4rem 0
.content-box
  height: 100%
  
</style>
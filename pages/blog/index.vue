<template>  
  <div class="wrapper">

    <main>
        <section v-for="(post, key) in data.stories" :key="key">
        <div class="content-box">
          <PostPreview :post="post" />
        </div>
        </section>
        
    </main>
    
    <SideBar/>


  </div>
</template> 

<script>
import axios from 'axios'
import '~/data/meta.js'
import PostPreview from '~/components/PostPreview'
import SideBar from '~/components/sections/SideBar'

export default {
    components: {
        PostPreview,
        SideBar
    },

    head () {
      return {
          title: this.info.blogTitle,
          // title: 'Блог за наука, програмиране, уеб дизайн, уеб приложениея',
          meta: [
          { hid: 'description', name: 'description', content: this.info.blogDescription },
          { hid: "og:url", name: "og:url", content: this.info.URL + '/blog'},
          { hid: "og:type", name: "og:type", content: "blog"},
          { hid: 'og:title', name: 'og:title', content: this.info.blogTitle,},
          { hid: 'og:description', name: 'og:description', content: this.info.blogDescription },
          { hid: 'og:image', name: 'og:image', content: ''},
          { hid: "twitter:title", name: "twitter:title", content: this.info.blogTitle},
          { hid: "twitter:description", name: "twitter:description", content: this.info.blogDescription },
          { hid: "twitter:image", name: "twitter:image", content: ''}

          ]
      }
    },

    data ({params}) {
        return { 
            total: 0, 
            data: { stories: [] },
            info
        }
    },
    asyncData (context) {

        let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
        // Load the JSON from the API
        return context.app.$storyapi.get('cdn/stories', {
            version: version,
            starts_with: 'blog/',
            resolve_relations: 'category',
            per_page: 5
        }).then((res) => { 
            return res
        }).catch((res) => {
            context.error({ statusCode: res.response.status, message: res.response.data })
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

</style>

<template>
<article  class="box">
    <div class="blog-post">
      <div class="solcial-icons">
          <ShareNetwork
            class="meta-info-icons__small"
            v-for="network in networks"
            :network="network.network"
            :key="network.network"
            :style="{backgroundColor: network.color}"
            :url="sharing.url"
            :title="sharing.title"
            :description="sharing.description"
            :quote="sharing.quote"
            :hashtags="sharing.hashtags"
            :twitterUser="sharing.twitterUser">
            <svg-icon class="meta-info-icons__small" :name="network.icon" :title="`Сподели в ${network.network}`" />
          </ShareNetwork>
        </div>
      <header>
         <!-- <nav>
            <ul>
                <li v-for="link of article.toc" :key="link.id">
                <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
                </li>
            </ul>
        </nav> -->
        <figure>
          <img :src="article.img" :alt="article.alt" loading="lazy"/>
        </figure>

        <div class="meta">

          <div class="meta-info">
            <Date :date="formatDate(article.date)"/>
            <div v-if="article.categories[0] === 'филми'" class="meta-info-icons">
              <a  :href="article.imdb" target="_blank">
                <svg-icon class="meta-info-icons__small" name="imdb" title="Виж в IMDB" />
              </a>
              <span>{{ article.rating }}</span>
              <a class="meta-info-icons__small" :href="article.subs" target="_blank">
                <img class="meta-info-icons__small" src="~assets/img/subtitles.png" alt="Свали Български Субтитри" title="Свали Български Субтитри">
              </a>
            </div>
          </div>

          <h1 class="meta-title">
            {{ article.title }}
          </h1>

        </div>
      </header>
       
        <div>
            <nuxt-content :document="article" class="typo"/>
            
            <prev-next :prev="prev" :next="next" />
        </div>
    </div>
</article>
</template>
<script>
import formatDate from '@/utils/formatDate'
import VideoPlayer from 'nuxt-video-player'
import global from '@/utils/global'
import getSiteMeta from '@/utils/getSiteMeta'
require('nuxt-video-player/src/assets/css/main.css')

export default {
  components: {
    VideoPlayer,
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.article.lang ? this.article.lang: 'bg-BG'
      },
      title: this.article.title,
      meta: [

        ...this.meta,
        {
          property: "article:published_time",
          content: this.article.createdAt,
        },
        {
          property: "article:modified_time",
          content: this.article.updatedAt,
        },
        {
          property: "article:tag",
          content: this.article.tags ? this.article.tags.toString() : "",
        },
        { name: "twitter:label1", content: "Written by" },
        { name: "twitter:data1", content: global.author || '' },
        { name: "twitter:label2", content: "Filed under" },
        {
          name: "twitter:data2",
          content: this.article.tags ? this.article.tags.toString() : "",
        },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `${this.$config.baseUrl}/articles/${this.$route.params.slug}`,
        },
      ],
    }
  },
  data() {
    return {
      networks: [
        { network: 'viber', icon: 'viber', color: '#665CAC' },
        { network: 'facebook', icon: 'facebook', color: '#1877f2' },
        { network: 'twitter', icon: 'twitter', color: '#1da1f2' },
        { network: 'messenger', icon: 'messenger', color: '#0084ff' },
        { network: 'pinterest', icon: 'pinterest', color: '#bd081c' },
        { network: 'telegram', icon: 'telegram', color: '#0088cc' },
        { network: 'whatsapp', icon: 'whatsapp', color: '#25d366' },
      ]
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: "article",
        title: this.article.title,
        description: this.article.description,
        url: `${this.$config.baseUrl}/articles/${this.$route.params.slug}`,
        mainImage: this.article.img,
      };
      return getSiteMeta(metaData);
    }
  },
  methods: {
    formatDate
  },
  async asyncData({ $content, $config, route, params }) {
      const article = await $content("articles", params.slug).fetch();

      let tags = []
      if (article.tags) {
      const tagsList = await $content('tags')
        .only(['name', 'slug'])
        .where({ slug: { $containsAny: article.tags } })
        .fetch()
      tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })))
    }

      const [prev, next] = await $content("articles")
          .only(["title", "slug", "updatedAt"])
          .sortBy("createdAt", "asc")
          .surround(params.slug)
          .fetch();

      let sharing = {
        url: $config.baseUrl + route.path,
        title: '',
        description: '',
        quote: '',
        hashtags: '',
        twitterUser: 'mayks1'
      }

      sharing.title = article.title
      sharing.description = article.description
      sharing.hashtags = article.tags.toString()

      return { article, prev, next, tags, sharing }
  },
}
</script>

<style>
@import url("~/assets/css/markdown.css");

.typo .nuxt-content-highlight {
  display: grid;
}

.typo .video {
  margin: 15px 0;
}

/* Images LightBox CSS */
.typo .lightbox {
  background: rgba(0,0,0,.5);
  z-index: 100;
}
.typo .lightbox__close {
    font-size: 3.5rem;
}
.blog-post {
  width: 100%;
  position: relative;
  background-color: var(--white);
  border-radius: 15px;
  margin: 0 auto;
  padding: 15px 15px 10px;
}
figure {
  /* position: relative; */
  margin-bottom: 15px;
}
figure img {
  width: 100%;
  height: auto;
  max-height: 400px;
  min-height: 350px;
  object-fit: cover;
  border-radius: 12px;
}

.solcial-icons {
  display: flex;
  flex-direction: column;
  position:absolute;
  z-index: 100;
  top: 45px;
  left: 20px;
}

.meta-title { 
  font-size:2em;
  font-weight:700;
  color: var(--black);
  line-height:1.5em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
.meta-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.meta-info span {
  color: var(--pink);
}
.meta-info-icons a {
  vertical-align: middle;
}
.meta-info-icons__small {
  height: 30px;
  width: 30px;
  margin-bottom: 10px;
}
.meta-info-icons .meta-info-icons__small:first-child {
  margin-right: 5px;
  margin-left: 5px;
}
</style>
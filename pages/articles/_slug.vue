<template>
<article  class="box">
    <div class="blog-post">
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
            <Date :date="article.date"/>
            <h1 class="meta-title">
              {{ article.title }}
            </h1>
          </div>
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
import VideoPlayer from 'nuxt-video-player'
require('nuxt-video-player/src/assets/css/main.css')

export default {
  components: {
    VideoPlayer
  },
  async asyncData({ $content, params }) {
      const article = await $content("articles", params.slug).fetch();
      const [prev, next] = await $content("articles")
          .only(["title", "slug", "updatedAt"])
          .sortBy("createdAt", "asc")
          .surround(params.slug)
          .fetch();
      return { article, prev, next };
  },
}
</script>

<style>
@import url("~/assets/css/markdown.css");

.typo .video {
  margin: 15px 0;
}
.blog-post {
  width: 100%;
  background-color: var(--white);
  border-radius: 15px;
  margin: 0 auto;
  padding: 15px 15px 10px;
}

figure {
  margin-bottom: 15px;
}

figure img {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  border-radius: 12px;
}

.meta-title { 
  font-size:2em;
  font-weight:700;
  color: var(--black);
  line-height:1.5em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
</style>
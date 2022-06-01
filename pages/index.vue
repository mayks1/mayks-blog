<template>

    <!-- <svg-icon name="share" /> -->
  <article class="box">
    <h1 style="text-align: center; margin-bottom: 1rem;">
      Последни Новини и Публикации
    </h1>
    <ul>
      <li v-for="article of articles" :key="article.slug">
        <BlogCard :article="article"/>
      </li>
    </ul>
  </article>
    
</template>

<script>
  export default {
    head() {
      return {
          htmlAttrs: {
            lang: 'bg-BG'
          },
      }
    },  
    async asyncData({ $content, params }) {
        const articles = await $content("articles")
            .only(["title", "description", "img", "alt", "slug", "categories", "date", "number"])
            .where({ status: 'publish' })
            .sortBy("number", "desc")
            .fetch();
        return {
            articles
        };
    },
}
</script>
<style>
/* .content {
  margin-left: auto;
  margin-right: auto;
}

@media screen and (max-width: 767px) {
  .content {
      padding-left: 15px;
      padding-right: 15px;
  }
}

@media screen and (min-width: 768px) {
  .content {
      padding-left: 20px;
      padding-right: 20px;
  }
} */

.mx-width-800 {
  max-width: 800px;
}

</style>

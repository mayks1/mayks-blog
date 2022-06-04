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
.mx-width-800 {
  max-width: 800px;
}

</style>

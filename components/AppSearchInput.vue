<template>
  <div class="search-container">
    <input 
      class="input"
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Търси ..."
    />
    <ul v-if="articles.length">
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchQuery: '',
        articles: []
      }
    },
    watch: {
      async searchQuery(searchQuery) {
        if (!searchQuery) {
          this.articles = []
          return
        }
        this.articles = await this.$content('articles')
          .limit(6)
          .search(searchQuery)
          .fetch()
      }
    }
  }
</script>

<style scoped>
.search-container {
  text-align: center;
}

.search-container ul {
  padding: 10px;
}

.search-container .input {
  margin: 0 auto 20px auto;
  color: var(--black);
}
</style>
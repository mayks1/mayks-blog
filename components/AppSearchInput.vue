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
  display: flex;
  flex-direction: column;
  align-items: center;
}
.search-container .input {
  margin: 0 auto 20px auto;
  color: var(--black);
}

.search-container ul {
  background-color: var(--white);
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 15px;
}

.search-container ul li {
  padding: 10px;
}

li a {
  font-size: 18px;
  cursor: pointer;
}

li a:hover {
  color: var(--pink);
}



</style>
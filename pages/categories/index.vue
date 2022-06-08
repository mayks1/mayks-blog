<template>
  <div class="box">
    <article class="card-wrapper">
      <div class="card">
        <div class="title">
          <h1 class="title-header">
            Всички Категории
          </h1>
        </div>
        <ul class="category-list">
          <li class="category-items" v-for="category in categories" :key="category" >
            <nuxt-link :to="`/categories/${category.name}`">
              {{ category.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'CategoriesListPage',
  async asyncData({ $content }) {
    // function onlyUnique(value, index, self) {
    //   return self.indexOf(value) === index;
    // }
    const categories = await $content('categories').only(['name']).fetch();
    // const tags = articles.flatMap((article) => article.tags).filter(onlyUnique);
    return {
      categories,
    };
  },
  head() {
    return {
      title: 'MSpase - Всички Категории',
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${this.$config.baseUrl}/categories`,
        },
      ],
    };
  },
};
</script>

<style scoped>
.title {
  text-align: center;
}

.title-header {
  color: var(--black);
}
</style>

<template>
  <div>
    <div class="flex justify-center">
      <h1
        class="text-center text-3xl mb-4 uppercase bg-black text-white inline-block mx-auto px-2"
      >
        Всички Категории
      </h1>
    </div>
    <ul>
      <li v-for="category in categories" :key="category" class="text-center mb-2">
        <nuxt-link
          :to="`/categories/${category.name}`"
          class="text-4xl hover:underline"
          >{{ category.name }}</nuxt-link
        >
      </li>
    </ul>
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

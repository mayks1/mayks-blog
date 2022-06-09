<template>
  <div class="box">
    <article class="card-wrapper">
      <div class="card">
        <div class="title">
          <h1 class="title-header">
            Всички Категории / All Categories
          </h1>
        </div>
        <ul class="category-list">
          <li class="category-items line-after" v-for="category in categories" :key="category" >
            <nuxt-link :to="`/categories/${category.slug}`">
             <h3>
                {{ category.name | capitalizeFirstLetter }}
             </h3>
            </nuxt-link>
            <p class="category-item__description">
              {{ category.description }}
            </p>
          </li>
        </ul>
      </div>
    </article>
  </div>
</template>

<script>
import getSiteMeta from '@/utils/getSiteMeta'

export default {
  name: 'CategoriesListPage',
  
  async asyncData({ $content }) {
    // function onlyUnique(value, index, self) {
    //   return self.indexOf(value) === index;
    // }
    const categories = await $content('categories').fetch();
    // const tags = articles.flatMap((article) => article.tags).filter(onlyUnique);
    return {
      categories,
    };
  },
  head() {
    return {
      title: 'MSpase - Всички Категории / All Categories',
      meta: [
        ...this.meta,
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${this.$config.baseUrl}/categories`,
        },
      ],
    };
  },
  computed: {
    meta() {
      const metaData = {
        type: "categories",
        title: 'MSpase - Всички Категории / All Categories',
        description: 'Всички категории на уебсайта с линкове към съответният раздел',
        url: `${this.$config.baseUrl}/categories`,
        mainImage: '',
      };
      return getSiteMeta(metaData);
    }
  },
};
</script>

<style scoped>
.title {
  text-align: center;
}

.title-header {
  color: var(--black);
  margin-bottom: 2rem;
}
.category-list {
  padding: 1rem;
}

.category-items h3 {
  padding: .6rem 0;
  color: var(--pink);
}
.category-item__description {
  color: var(--gray);
}
</style>

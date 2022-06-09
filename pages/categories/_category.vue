<template>
  <article class="box">
    <div class="category-container">

      <h1 >Категория: <span>{{ $route.params.category | capitalizeFirstLetter }}</span> </h1>
      <p class="line-after">{{ category.description}}</p>

      <ul>
        <li v-for="article in articles" :key="article.slug">
          <NuxtLink :to="`/articles/${article.slug}`">
            <div class="link">
              <h2>{{ article.title }}</h2>
              <p>{{ article.description }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>

    </div>

  </article>
</template>

<script>
import getSiteMeta from '@/utils/getSiteMeta'
export default {
  name: 'CategoryPage',

  async asyncData({ $content, params }) {
     const category = await $content('categories', params.category)
      .only(['name', 'description'])
      // .where({ slug: { $contains: params.category } })
      .fetch()

    const articles = await $content('articles')
      .only(['title', 'description', 'slug'])
      .where({ categories: { $contains: params.category } })
      .fetch()

    // const articlesByCategory = articles.filter((article) => {
    //   const articleCategories = article.category.map((x) => x.toLowerCase());
    //   return articleCategories.includes(params.category);
    // });
    // const category = categories.length > 0 ? categories[0] : {}
    // const articles = await $content('articles')
    //   .only(['title', 'description', 'slug'])
    //   .where({ categories: { $contains: params.slug } })
    //   .fetch()
    return {
      articles,
      category
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: "category",
        title: `Статии с Категория - ${this.$options.filters.capitalizeFirstLetter(this.$route.params.category)}`,
        description: this.category.description,
        url: `${this.$config.baseUrl}/categories/${this.$route.params.category}`,
        mainImage: '',
      };
      return getSiteMeta(metaData);
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: 'bg-BG'
      },
      // Използваме глобалния филтър чрез this.$options.filters._____
      title: `Статии с Категория - ${this.$options.filters.capitalizeFirstLetter(this.$route.params.category)}`,
      meta: [
        ...this.meta,
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${this.$config.baseUrl}/categories/${this.$route.params.category}`,
        },
      ],
    };
  },
}
</script>

<style scoped>
.category-container {
    background-color: var(--white);
    border-radius: 12px;
    border: 1px solid #bacdd8;
    padding: 30px;
}

h1 {
  font-size: 32px;
  color: var(--black);
}

h1 span {
  color: var(--pink);
}

p {
  color: var(--gray);
  padding: 10px 0;
}

h2 {
  font-size: 24px;
  color: #444444;
  /* color: var(--gray); */
}

ul {
  margin-top: 20px;
}

ul li {
    /* color: var(--gray); */
    line-height: 30px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ebebeb;
}

/* li a {
  cursor: pointer;
} */

li .link {
  padding: 5px;
} 

li .link:hover h2 {
  cursor: pointer;
  color: var(--pink);
}

</style>
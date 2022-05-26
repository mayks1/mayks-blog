<template>
  <article class="box">
    <div class="category-container">

      <h1 >Категория: <span>{{ category.name }}</span> </h1>
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
export default {
  async asyncData({ $content, params }) {
    const categories = await $content('categories', params.slug)
      .only(['name', 'description'])
      // .where({ slug: { $contains: params.category } })
      // .limit(1)
      .sortBy('createdAt', 'desc')
      .fetch()
    const category = categories.length > 0 ? categories[0] : {}
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'slug'])
      .where({ categories: { $contains: category.name } })
      .fetch()
    return {
      articles,
      category
    }
  }
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
<template>
<div>
    <div>
        <NuxtLink :to="`/blog/category/${category.slug}`">
            <span>{{ category.name }}</span>
        </NuxtLink>
        <ul>
            <li
                v-for="article in articles"
                :key="article.slug"
            >
                <NuxtLink
                    :to="`/blog/${article.slug}`"
                >
                <h2>{{ article.title }}</h2>
                </NuxtLink>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const categories = await $content('categories')
      .where({ slug: { $contains: params.category } })
      .limit(1)
      .fetch()
    const category = categories.length > 0 ? categories[0] : {}
    const articles = await $content('articles', params.slug)
      .where({ categories: { $contains: category.name } })
      .fetch()
    return {
      articles,
      category
    }
  }
}
</script>
<template>
  <section class="aside-card">
    <h4 class="aside-card-title line-after">Категории / Categories</h4>
    <ul>
      <li class="list-item" v-for="(category, i) in categories" :key="i">
        <NuxtLink class="link" :to="`/categories/${category.slug}`">{{ category.name | capitalizeFirstLetter }}</NuxtLink>
      </li>

    </ul>
  </section>
</template>

<script>
export default {
    props: {
        categories: []
    }

}
</script>

<style scoped>

</style>
<template>
  <div class="aside-card">
            <h4 class="aside-card-title line-after">Категории</h4>
            <ul>
                <li
                class="list-item" 
                v-for="(category, i) in categories" 
                :key="i">
                    <NuxtLink class="link" :to="`/categories/${category.slug}`">{{ category.name }}</NuxtLink>
                </li>
                
            </ul>
        </div>
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
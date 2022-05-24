<template>
  <div class="aside-card">
            <h4 class="aside-card-title line-after">Категории</h4>
            <ul>
                <li
                class="list-item" 
                v-for="(category, i) in categories" 
                :key="i">
                    <nuxt-link class="link" :to="`/blog/category/${category.slug}`">{{ category.name }}</nuxt-link>
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
.aside-card {
    background-color: var(--white);
    border-radius: 12px;
    border: 1px solid #bacdd8;
    padding: 30px;

}
.aside-card-title {
    font-size: 24px;
    color: #333333;
    text-align: left;
    margin: 0 0 40px;

}

ul .list-item {
    color:#333333;
    line-height: 30px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ebebeb;
}

ul .list-item .link:hover {
    color: var(--pink);
}

ul .list-item:last-of-type {
    margin-bottom: 0;
    border-bottom: 0;
    padding-bottom: 0;
}
</style>
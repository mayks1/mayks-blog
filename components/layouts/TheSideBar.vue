<template>
    <aside class="aside-wrapper box">
        <div>

        </div>
        <AsideCard v-if="dataReady" :categories="categories" v-show="$route.path!=='/categories'"/>
        <AdsCard/>
    </aside>
</template>

<script>
import AdsCard from '../AdsCard.vue'
  export default {
    data: () => ({
        categories: [],
        dataReady: false,
    }),
    async mounted() {
        this.categories = await this.$content("categories")
            .only(["name", "slug"])
            .sortBy("createdAt", "asc")
            .fetch();
        this.dataReady = true;
    }
    // async asyncData({ $content, params }) {
    //     const articles = await $content("articles")
    //         .only(["title", "description", "img", "alt", "slug", "tags", "updatedAt"])
    //         .sortBy("createdAt", "desc")
    //         .fetch();
    //     return {
    //         articles
    //     };
    // },
    ,
    components: { AdsCard }
}
</script>

<style scoped>
.aside-wrapper {
    width: 100%;
    padding-bottom: 30px;
}

</style>
<template>
  <!-- /.blog-card -->
  <article class="card-wrapper">
    <div class="card">
       <NuxtLink :to="`/articles/${article.slug}`">
        <img :src="article.img" loading="lazy" :alt="article.alt">
       </NuxtLink>
      
      <div class="card__details">

        <div class="info">
          <div v-if="article.categories">
            
              <span class="category" v-for="(category, i) in article.categories" :key="i">
                <nuxt-link :to="`/categories/${category}`">
                  {{ category }}
                </nuxt-link>
              </span>

          </div>
          <Date :date="article.date | formatDate" />
        </div>
        
        <NuxtLink :to="`/articles/${article.slug}`">
          <h2 class="name">{{ article.title }}</h2>
        </NuxtLink>
        <p>{{ article.description }}</p>
        <Button 
          :to="`/articles/${article.slug}`"
          text="Продължи да четеш" 
        />
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    article: Object,
  },
}
</script>

<style scoped>

img {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  border-radius: 12px;
  transition: all 300ms ease;

}

img:hover,
img:focus {
  transform: scaleY(1.01)  scaleX(1.01);
  /* transform: translateY(-3px)  translateX(3px); */
}

.card__details {
  /* Add space around the details */
  padding: 16px 8px 8px 8px;
}

.info {
  display: flex;
  justify-content: space-between;
}

/* Style div elements that have class equal to category */
.category {
  padding: 8px 15px;
  margin-right: 10px;
  border-radius: 18px;
  background-color: var(--dark-blue);
}
.category a {
  font-size: 14px;
  color: var(--white);
}

/* Style div elements that have class equal to name */
.name {
  font-size: 24px;
  font-weight: 600;
  margin-top: 16px;
  color: var(--black);
}

p {
  font-size: 14px;
  color: #7f8c9b;
  line-height: 150%;
  margin-bottom: 10px;
}

</style>
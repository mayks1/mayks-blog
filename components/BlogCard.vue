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
            <span v-for="(category, i) in article.categories" :key="i" class="category">{{ category }}</span>
          </div>
          <Date :date="article.updatedAt" />
        </div>
        
        <NuxtLink :to="`/articles/${article.slug}`">
          <h2 class="name">{{ article.title }}</h2>
        </NuxtLink>
        <p>{{ article.description }}</p>
        <Button 
          text="Продължи да четеш" 
          :to="`/articles/${article.slug}`"
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
.card-wrapper {
  width: 100%;
  /* max-width: 300px; */
  margin: 0 auto;
  /* margin-top: 10vh; */
  padding: 0 0 40px;
}

.card {
  background-color: var(--white);
  border: 1px solid #bacdd8;
  padding: 8px;
  border-radius: 12px;
}

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
  /* border: 1px solid #e5eaed; */
  /* font-family: Arial, Helvetica, sans-serif; */
  padding: 8px 15px;
  margin-right: 10px;
  border-radius: 18px;
  font-size: 14px;
  /* font-weight: 600; */
  color: var(--white);
  background-color: var(--dark-blue);
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
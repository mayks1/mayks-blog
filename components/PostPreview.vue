<template>
  <div class="post">
    <figure>
      <img class="post-image" :src="post.content.image" alt="">
    </figure>
    <h3 class="post-title"><nuxt-link :to="/blog/ + post.slug">{{post.content.title}}</nuxt-link></h3>
    <div class="post-text">
      
      <div class="post-date">
        <img class="post-icon" src="~/assets/images/calendar-outline.svg" alt="Calendar Icon">
        <time class="time" :datetime="post.published_at | date">{{ post.published_at | date }}</time>
        <img class="dot" src="~/assets/images/circle.svg">
        <span 
            v-for="(category, key) in post.content.category" 
            :key="key">
                <nuxt-link 
                    class="category" 
                    :to="'/category/' + category.uuid" 
                    :title="'Категория: ' + category.name">
                    {{ category.name }}
                </nuxt-link></span>
      </div>
    </div>
  </div>
    
</template>

<script>
export default {
  props: {
    post: {}
  }
}
</script>

<style lang="sass" scoped>

.post
  text-align: center
  &-image
      // max-height: 20rem
      +responsive
  &-text 
      padding: 2rem
  &-title
      padding-bottom: 2rem
      a
        font-size: calc(1.85vw + 7px) //2.4rem 
        line-height: calc(calc(1.85vw + 7px)*1.3)
        +break(xs)
          font-size: 2.5rem
  .time,
  .category
      font-size: 1.8rem
      padding: 0 .7rem
  .dot
      +box(0.7rem, auto)
  .category
      font-weight: 400
      text-transform: uppercase
      color: $primary-color
      &:hover 
          color: $white-color
  &-icon
      +box(1.5rem, auto)

</style>
<template>
  <div class="content-box">
    <div class="title">
      <h2 v-if="error.statusCode === 404" class="bug-title">4<img src="~/assets/images/bug.svg" alt="" srcset="">4<span>Страницата, Не е Намерена!</span></h2>
      <h2 v-else>Възникна Грешка: <span class="error">#{{error.statusCode}}</span></h2>
    </div>
    
    <a href="/"><Button text="-> Начална Страница <-" /></a>
  </div>
</template>

<script>
import Button from '~/components/Button'

export default {
  components: {
    Button
  },
  props: ['error'],
}
</script>

<style lang="sass" scoped>

.content-box
  text-align: center

.title
  position: relative

.bug-title
  color: #ccc
  text-align: center
  font-size: 9rem
  font-weight: 700
  margin-bottom: 15px
  img 
    position: relative
    top: -.6rem
    +box(10rem)
    fill: red
  span 
    display: block
    font-size: 3rem

.error
  display: block
  color: $primary-color
  font-size: 4rem
  margin: 3rem 0

</style>
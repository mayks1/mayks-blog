<template>
  <div class="container" :class="{ overFlow: $store.state.isOverflow }">
    <div class="wrapper">
      <Header :isLarge="isLarge"/>
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/layout/Header'
import Footer from '~/components/layout/Footer'

export default {

  components: {
    Header,
    Footer,
  },

  data() {
      return {
          // Променлива за разпъване на Навбара
          isLarge: false,
          // isOn: false
      }
  },
  
  methods: {
    //Функция коят следи дали има скрол на екрана
    handleScroll () {
      if (document.documentElement.scrollTop > 10) {
        this.isLarge = true
      } else {
        this.isLarge = false
      }
    },
  },

  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="sass">

.overFlow
  overflow: hidden

.container
  height: 100%
  display: flex
  flex-direction: column


.wrapper
  flex: 1 0 auto

footer 
  flex-shrink: 1

</style>

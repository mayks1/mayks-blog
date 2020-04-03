<template>
  <aside>

      <div class="aside-box">
        <div class="content-box">
          <h5>Търси</h5>
          <form class="search-form">
            <input type="text" placeholder="Търсене в Блога">
          </form>
        </div>
      </div>

      <div class="aside-box">
        <div class="content-box">
          <h5>Категории</h5>
          <ul>
            <li v-for="(category, key) in categories" :key="key">
             <nuxt-link :to="'/category/' + category.uuid"><h6>{{ category.name }}</h6></nuxt-link>
            </li>
          </ul>
          
        </div>
      </div>

    </aside>
</template>

<script>
export default {

  // props: {
  //   categories: {}
  // },
  computed: {
    categories() {
      return this.$store.getters['categories/categories']
    }
  }
}
</script>

<style lang="sass" scoped>

aside
  flex: 1
  padding: 2.7rem 0
  overflow-x: hidden
  a 
    padding: 6px 8px 6px 16px
    font-size: 25px
    color: #818181
    display: block
  .aside-box
    margin: 0 4px
    +mb3
  input 
    border-radius: 5px
    +break(lg)
        font-size: 14px
        text-align: center

.content-box
  text-align: center
  h5
    margin-bottom: 1.5rem
  h6
    font-weight: 300
    color: $primary-color
    padding: .7rem
  ul
    +break(tablet)
      display: flex
      justify-content: space-evenly

.search-form
  padding: 0 5px

</style>
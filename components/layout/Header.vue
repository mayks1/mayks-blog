<template>
  <header>
    <div class="nav-menu" >  <!-- Добавя или премахва класа isLarge, който разпъта Навбара // :class="{ fixfull: isLarge }"-->

        <a href="/">
            <img class="logo" src="~/assets/images/mayks-logo.svg" alt="Mayks Logo" srcset="">
            <!-- <h2 class="logo">Mayks</h2> -->
        </a>

        <div class="header-search">
            <input type="text" placeholder="Търсене">
        </div>

        <nav class="nav-bar" :class="{navActive: isActive}"> <!-- Показва или скрива Навбара при малък екран -->
            <ul @click="toggleNavbarLinks">
                <a class="nav-link" href="/">Начало</a>
                <nuxt-link class="nav-link" to="/blog">Блог</nuxt-link>
                <nuxt-link class="nav-link" to="/about">За Мен</nuxt-link>
                <nuxt-link id="accent" class="nav-link" to="/covid">COVID-19</nuxt-link>
                <!-- <nuxt-link class="nav-link" to="/covid">COVID-19</nuxt-link> -->
            </ul>
        </nav>
        <!-- При клик извиква функцията toggle, която скрива или показва Навбара -->
        <div @click="toggleNavbarOverflow" class="btn-toggler">&#9776;</div> 
<a href="http://"></a>
      </div>
    </header>
</template>

<script>
export default {
   props: {
       isLarge: Boolean
   },
   data() {
       return {
           isActive: false,
       }
   },

   methods: {
       toggleNavbarLinks() {
           this.isActive = false
           this.$store.commit('overflow', false)
       },

       toggleNavbarOverflow() {
           this.isActive = !this.isActive
           this.$store.commit('overflow', this.isActive)
       }
   },
}
</script>

<style lang="sass" scoped>

.nav-menu
    display: flex
    justify-content: space-between
    align-items: center
    margin-top: 2.7rem
    margin-bottom: 2.7rem
    background: $secondary-color
    padding: 1.2rem 4rem
    transition: all .8s ease
    +neomorph

.logo
    width: auto
    height: 5rem
    border-radius: 0
    
.nav-bar
    +flex-center-vert
    +break(tablet)
        top: 11.8rem
        position: absolute
        width: calc(100vw - 2.5rem)
        height: calc(100vh - 12.5rem)
        background: $secondary-color
        left: -100%
        z-index: 999
        +flex-center
        +neomorph
        +transition
    +break(xs)
        top: 14rem
        height: calc(100vh - 15rem)
    +break(xxs)
        top: 14rem
        height: calc(100vh - 18rem)
    ul 
        +break(tablet)
            display: flex
            flex-direction: column
            justify-content: center
            align-items: center
            a 
                font-size: calc(1.85vw + 18px)
                margin-block: 2rem
    #accent
        color: $accent-color

// Изважда Навбара на екрана на 2% от лявото поле 
.navActive
    left: 1.5rem
    +break(xs)
        left: 1.8rem


.nav-link
    font-weight: 500
    letter-spacing: 1px
    padding-left: 1.2rem
    padding-right: 1.2rem
    transition: all .4s ease
    &:last-child
        padding-right: 0

.nuxt-link-exact-active
    color: $primary-color

.btn-toggler 
    color: $primary-color
    float: right;
    line-height: 3rem
    font-size: 2.8rem
    padding: .5rem
    cursor: pointer
    display: none
    +transition
    border-radius: 5px
    &:hover
        // color: $white-color
        background: transparentize($carousel-el-color, 0.9)
    +break(tablet)
        display: block
    +break(xs)
        padding: 1.5rem

.fixfull
    position: fixed
    top: 0
    left: 0
    right: 0
    z-index: 999
    background: #262626
    margin: 0 
    box-shadow: 0px 5px 10px 3px rgba(0, 0, 0, 0.2)
    transition: all .8s ease

.header-search
    input
        margin-bottom: 0
        text-align: center
        width: calc(25vw + 10px)
        font-size: calc(1.85vw + 6px)
        +breakPoint(tablet)
            font-size: 24px
</style>
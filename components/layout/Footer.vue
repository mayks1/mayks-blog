<template>
  <footer>
    <div class="content-box">
        <p>Copyright © 2019 - 2020 <span>Mayks.Dev - Всички права запазени!</span>
          <a href="mailto:contact@mayks.dev" itemprop="email" class="footer-email">За контакти: contact@mayks.dev</a>
        </p>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>

::v-deep
  .footer-email
    text-align: center
    display: block

.content-box
    text-align: center
    p 
      font-size: calc(1.85vw + 4px) //2rem 
      line-height: calc(calc(1.85vw + 4px)*1.3)
      color: $primary-color
      +breakPoint(phone)
        font-size: 18px
      span 
        +break(phone)
          display: block


    
</style>
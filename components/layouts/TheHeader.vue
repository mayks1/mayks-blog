<template>
  <header class="header">
    <Logo />

    <a class="rss-icon" href="/articles/rss.xml" target="_blank"><RSS /></a>

  </header>
</template>
<script>
import RSS from '@/components/svg/RSS'

export default {
  name: 'TheHeader',
  components: { RSS },
}
</script>



<style scoped>
.header {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
}
.rss-icon {
  position: absolute;
  z-index: 10;
  top: 20px;
  right: 20px;
}
</style>


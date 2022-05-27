<template>
  <!-- <div class="container"> -->
  <div class="wrapper">
    <TheHeader class="main-head" />
    <TheNav class="main-nav" />
      <Nuxt class="content"  keep-alive/>
    <TheSideBar class="side"/>
    <TheFooter class="main-footer" />
  </div>
  <!-- </div> -->
</template>
<script>
import TheHeader from "~/components/layouts/TheHeader"
import TheNav from "~/components/layouts/TheNav"
import TheFooter from "~/components/layouts/TheFooter"
import TheSideBar from "~/components/layouts/TheSideBar"

export default {
  components: {
    TheHeader,
    TheFooter,
    TheNav,
    TheSideBar,
  },
}
</script>

<style></style>

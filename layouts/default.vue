<template>
  <!-- <div class="container"> -->
  <div class="wrapper">
    <TheHeader class="main-head" />
    <TheNav class="main-nav" />
    <main>
      <!-- <Nuxt class="content"  keep-alive/> -->
      <Nuxt class="content"/>
    </main>
    <TheSideBar class="side"/>
    <TheFooter class="main-footer" />
    <CookiesConsent />
  </div>
  <!-- </div> -->
</template>
<script>
import TheHeader from "~/components/layouts/TheHeader"
import TheNav from "~/components/layouts/TheNav"
import TheFooter from "~/components/layouts/TheFooter"
import TheSideBar from "~/components/layouts/TheSideBar"
import CookiesConsent from "~/components/CookiesConsent"

export default {
  name: 'MainLayout',
  components: {
    TheHeader,
    TheNav,
    TheFooter,
    TheSideBar,
    CookiesConsent,
  },
}
</script>

<style></style>

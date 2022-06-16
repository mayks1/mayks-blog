<template>
  <div>
    <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-8365005414967197"
            data-ad-slot="9121674298"
            data-ad-format="auto"
            data-full-width-responsive="true">
    </ins>
  </div>
</template>

<script>
export default {
  head() {
    return {
        script: [
          {
            hid: 'adsense',
            src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8365005414967197",
            defer: true,
            async: true,
            crossorigin: "anonymous"
          },
        ],
      }
  },  

  mounted() {
    this.$nextTick(() => {
      try {
        // this is required for each ad slot (calling this once will only load 1 ad)
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      } catch (error) {
        console.error(error)
      }
    })
  },
}
</script>
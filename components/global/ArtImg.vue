<template>
  <div class="article-img">
    <img :src="src" :alt="alt" />
  </div>
</template>

<script>
  export default {
      //declare props for the 'src' and 'alt' of the image
      props: {
          src: {
              type: String,
              required: true
          },
          alt: {
              type: String,
              required: true
          }
      },
  }
</script>
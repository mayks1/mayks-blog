<template>
  <div class="error-404">
    <h1>This page doesn’t exist</h1>
    <p>The link you clicked on may be broken or no longer exist.</p>
    <nuxt-link to="/">Към Началото</nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'error-404',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
<style scoped>
.error-404 {
  text-align: center;
}
div a {
  display: block;
  margin-top: 40px;
  color: var(--pink);
  font-size: 20px;
}
</style>
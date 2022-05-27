<template>
  <div class="prev-next">
    <NuxtLink
      v-if="prev"
      :to="`/articles/${prev.slug}`"
      class="prev-next-links"
    >
      <svg-icon 
        class="svg-pink" 
        name="chevron" 
        title="Arrow Left"
      />
      <!-- {{ prev.title }} -->
      Предишна
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="`/articles/${next.slug}`"
      class="prev-next-links"
    >
      <!-- {{ next.title }} -->
      Следваща
      <svg-icon 
          class="svg-pink" 
          name="chevron-right" 
          title="Arrow Right"
      />
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
  export default {
    props: {
      prev: {
        type: Object,
        default: () => null
      },
      next: {
        type: Object,
        default: () => null
      }
    }
  }
</script>

<style scoped>
.prev-next {
  display: flex;
  justify-content: space-evenly;
  margin: 15px 0;
}
.prev-next-links {
  color: var(--pink);
  font-weight: bold;
}

.prev-next-links .icon {
  margin: 0 5px;
  vertical-align: middle;
  width: 1em;
  height: 1em;
  font-size: 1em;
}
</style>
<template>
  <time class="time-box">
    <svg-icon class="svg-pink" name="calendar-outline" title="Calendar" />
    {{ formatDate(date) }}
  </time>
</template>

<script>
export default {
    props: ['date'],
    methods: {
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('bg', options)
        }
    }
}
</script>

<style scoped>
.time-box {
  color: var(--gray);
  margin-right: 20px;
  font-size: 14px;
}

.icon {
  vertical-align: middle;
  margin-right: 2px;
  width: 1em;
  height: 1em;
  font-size: 1.2em;
}

</style>
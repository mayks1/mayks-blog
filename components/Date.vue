<template>
  <time class="time-box">
    <svg-icon class="svg-pink" name="calendar-outline" title="Календар" />
    <span>{{ date }}</span>
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

.time-box .icon {
  vertical-align: middle;
  margin-right: 5px;
  width: 1em;
  height: 1em;
  font-size: 1.2em;
  filter: invert(52%) sepia(25%) saturate(7497%) hue-rotate(308deg) brightness(94%) contrast(92%);
}

.time-box span {
  vertical-align: middle;
}

</style>
import Vue from 'vue'

Vue.filter('formatDate', (value) => {
  const date = new Date(value)
  return date.toLocaleString('bg-BG', { dateStyle: 'medium' })
})

Vue.filter('capitalizeFirstLetter', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

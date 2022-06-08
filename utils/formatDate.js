export default (date) => {
  return new Date(date).toLocaleString('bg-BG', { dateStyle: 'medium' })
}

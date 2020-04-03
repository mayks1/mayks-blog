import Vue from 'vue'

const months = [
  "Януари",
  "Февруари",
  "Март",
  "Април",
  "Май",
  "Юни",
  "Юли",
  "Август",
  "Септември",
  "Октомври",
  "Ноември",
  "Декември"
];

const dateFilter = value => {
  return formatDate(value);
};

function formatDate(inputDate) {
  // const date = new Date(inputDate) 2018-12-10T17:50:54.023Z;
  const year = inputDate.slice(0, 4) // Изрязва първите 4 позици
  const month = parseInt(inputDate.slice(5, 7)) - 1 // Изрязва 4 и 5 позиция и я превръща в число + 1
  const day = inputDate.slice(8, 10) // Изрязва 1 и 2 позиция
  const formattedDate = `${day} ${months[month]} ${year} г.`
  return formattedDate
}
// function formatDate(inputDate) {
//   // const date = new Date(inputDate) 2018-12-10T17:50:54.023Z;
//   const year = inputDate.slice(-4) // Изрязва последните 4 позици
//   const month = parseInt(inputDate.slice(3, 5)) - 1 // Изрязва 4 и 5 позиция и я превръща в число + 1
//   const day = inputDate.slice(0, 2) // Изрязва 1 и 2 позиция
//   const formattedDate = `${day} ${months[month]} ${year} г.`
//   return formattedDate
// }

Vue.filter('date', dateFilter)

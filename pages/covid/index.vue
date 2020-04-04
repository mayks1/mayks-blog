<template>
  <main>
    <div class="section-title">
      <h1 class="text">Инвазията на COVID-19 CORONAVIRUS<span>Цял Свят</span></h1>
    </div>
    <div class="content-box">
      <div class="post">

        <div class="post-container">
          <h2 class="post-title">Заразени с корона-вирус:</h2>
          <div class="results-container">
            <span>{{ worldCases.cases }}</span>
          </div>
        </div>

        <div class="post-container">
          <h2 class="post-title">Починали:</h2>
          <div class="results-container">
            <span class="red">{{ worldCases.deaths }}</span>
          </div>
        </div>

        <div class="post-container">
          <h2 class="post-title">Оздравели:</h2>
          <div class="results-container">
            <span class="green">{{ worldCases.recovered }}</span>
          </div>
        </div>

      </div>
    </div>

    <div class="section-title">
      <h1 class="text">COVID-19 CORONAVIRUS<span>България</span></h1>
    </div>

    <div class="content-box">
      <div class="post">
        <div class="post-container">
          <h2 class="post-title">Общо Случаи:<span class="orange"> {{ bulgariaCases.cases }}</span></h2>
        </div>

        <div class="post-container">
          <h2 class="post-title">Активни Случаи:<span class="red"> {{ bulgariaCases.active }}</span></h2>
        </div>

        <div class="post-container">
          <h2 class="post-title">Оздравели:<span class="green"> {{ bulgariaCases.recovered }}</span></h2>
        </div>
        <div class="post-container">
          <h2 class="post-title">Общо Починали:<span class="red"> {{ bulgariaCases.deaths }}</span></h2>
        </div>
        <div class="post-container">
          <h2 class="post-title">Критични:<span class="orange"> {{ bulgariaCases.critical }}</span></h2>
        </div>
        <div class="post-container">
          <h2 class="post-title">Случаи от днес:<span class="orange"> {{ bulgariaCases.todayCases }}</span></h2>
        </div>
        <div class="post-container">
          <h2 class="post-title">Починали днес: <span class="red"> {{ bulgariaCases.todayDeaths }}</span></h2>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import '~/data/meta.js'
import axios from 'axios'

export default {
  head() {
    return {
      title: "Актуална Информация за COVID-19",
      meta: [{
          property: 'og:title',
          content: "Актуална Информация за COVID-19"
        },
        { hid: "og:url", name: "og:url", content: this.info.URL + `${this.$route.fullPath}`},
        {
          property: 'og:description',
          content: 'Показва текущи информация за заразени, починали, оздравели за цял свят и България'
        },
        {
          property: 'og:image',
          content: '/corona.jpg'
        },
      ],
    }
  },
  data() {
    return {
      worldCases: {},
      bulgariaCases: {},
      info
    }
  },

  created() {

    axios.get('https://coronavirus-19-api.herokuapp.com/all')
      .then(res => this.worldCases = res.data)
      .catch(err => console.log(err))

    axios.get('https://coronavirus-19-api.herokuapp.com/countries')
      .then(res => this.bulgariaCases = res.data.find((el) => el.country == "Bulgaria"))
      .catch(err => console.log(err))

  }

}
</script>

<style lang="sass" scoped>

.section-title
    text-align: center
    margin: 2rem
    span
        font-size: calc(1.85vw + 4rem)
        display: block
    .text
        font-weight: 700
        font-size: calc(1.85vw + 5px) //3rem
        line-height: calc(calc(1.85vw + 20px)*1.3)
        color: $primary-color
        text-transform: uppercase 

.post
    text-align: center
    &-container
        margin-bottom: 2rem
    &-title
        padding-bottom: 2rem
        font-size: calc(1.85vw + 7px)
        line-height: calc(calc(1.85vw + 7px)*1.3
        text-transform: uppercase 
        span 
            font-size: calc(1.85vw + 4rem)
            padding-left: 2rem
            vertical-align: middle
            display: inline-block

.results-container
    color: $primary-color
    font-size: calc(1.85vw + 4rem)
    font-weight: 700

.green
    color: #44be0b
.red
    color: #d61a1a
.orange
    color: $primary-color

</style>
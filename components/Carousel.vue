<template>
  <no-ssr placeholder="Loading...">
    <agile class="agile" :options="myOptions">

       <!-- Slide Start -->
        <div class="slide">
          <!-- Wrapper Start -->
          <div class="content-wrapper">
              <div class="content-title">
                  <h2>Изграждане на уеб страници</h2>
                  <h3>Web Development</h3>
              </div>
              <div class="content-text">
                  <p>Идивидуални уеб системи по задание на клиента.</p>
                  <p>Изграждане на статични и динамични страници.</p>
              </div>
          </div>
          <!-- Wrapper End -->
        </div>

        <!-- Slide Start -->
        <div class="slide">
          <!-- Wrapper Start -->
          <div class="content-wrapper">
              <div class="content-title">
                  <h2>Ефективна SEO оптимизация</h2>
                  <h3>SEO Optimization</h3>
              </div>
              <div class="content-text">
                  <p>Мета заглавия, мета описания, тагове.</p>
                  <p>Н1, Н2, alt текст, стронг, хиперлинкове.</p>
                  <p>Friendly URLs, sitemap.xml, robots.txt, canonical URL.</p>
              </div>
          </div>
          <!-- Wrapper End -->
        </div>

        <!-- Slide Start -->
        <div class="slide">
          <!-- Wrapper Start -->
          <div class="content-wrapper">
              <div class="content-title">
                  <h2>Адаптивен дизайн</h2>
                  <h3>Responsive Design</h3>
              </div>
              <div class="content-text">
                  <p>Сайтове изглеждащи добре на всички видове устройства.</p>
                  <p>Ако вашия уеб сайт е с responsive (адаптивен) дизайн не е необходимо да се прави мобилна версия.</p> 
                  <p>Той автоматично ще се оразмери спрямо размера на устройството от което е зареден.</p>
              </div>
          </div>
          <!-- Wrapper End -->
        </div>

        <!-- Slide Start -->
        <div class="slide">
          <!-- Wrapper Start -->
          <div class="content-wrapper">
              <div class="content-title">
                  <h2>Управлявайте сайта си лесно</h2>
                  <h3>CMS + Admin Panel</h3>
              </div>
              <div class="content-text">
                  <p>Системата за управление на съдържанието Ви дава възможност да променяте сами до 90% от съдържанието в сайта си.</p>
              </div>
          </div>
          <!-- Wrapper End -->
        </div>

        <!-- Slide Start -->
        <div class="slide">
          <!-- Wrapper Start -->
          <div class="content-wrapper">
              <div class="content-title">
                  <h2>Печатни услуги</h2>
                  <h3>Business Cards</h3>
              </div>
              <div class="content-text">
                  <p>Дизайн и Изработка на визитни картички</p>
                  <p>Правилната визитка може да направи дълготрайно и положително впечатление и често може да бъде отправна точка за ползотворни взаимоотношения между компанията или клиента.</p>
              </div>
          </div>
          <!-- Wrapper End -->
        </div>

        <template slot="prevButton">
          <img class="nav__btn" src="~/assets/images/chevron-back.svg" alt="chevron-back" srcset="">
        </template>
        <template slot="nextButton">
          <img class="nav__btn" src="~/assets/images/chevron-forward.svg" alt="chevron-back" srcset="">
        </template>
      </agile>
  </no-ssr>
</template>

<script>

export default {
  data () {
    return {
        myOptions: {
            timing: 'linear',
            autoplay: true,
            autoplaySpeed: 6000,
            dots:true
        }
    }
  }
}
</script>

<style lang="sass">
// ---------- AGILE Start--------------
.agile
  cursor: auto !important
  &:hover 
    color: $white-color !important

.slide
	h3
		font-size: 32px
		font-weight: 300

.nav__btn
  height: 4rem
  &:hover
    filter: invert(53%) sepia(92%) saturate(1103%) hue-rotate(354deg) brightness(99%) contrast(106%)

.agile
  &__actions
    margin-top: 2rem

  &__nav-button
		background: transparent
		border: none
		color: $carousel-el-color
		cursor: pointer
		font-size: 2.4rem
		transition-duration: .3s

		&:hover
			color: $primary-color

  &__dot
    margin: 0 1rem

    button
      background-color: $carousel-el-color
      border: none
      border-radius: 50%
      cursor: pointer
      display: block
      height: 1rem
      font-size: 0
      line-height: 0
      margin: 0
      padding: 0
      transition-duration: .3s
      width: 1rem

    &--current,
    &:hover
      button
        background-color: $primary-color
// ---------- AGILE End--------------
.content-wrapper
  text-align: center

.content-title
  h2
    font-size: 3.5rem
    font-weight: 700
    text-transform: uppercase 
  h3 
    color: $primary-color
    padding-top: .5rem
    padding-bottom: 3rem
    display: inline-block

.content-text
  p 
    padding: .5rem
    font-size: 2rem




</style>
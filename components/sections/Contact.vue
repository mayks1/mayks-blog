<template>
  <section class="contact">
    <div class="content-box content-box__form">
        <div class="content-box__left">
            <h3>Контакт</h3>
            <h2>За връзка и информация използвайте <span>контактната форма</span></h2>
        </div>
        <div class="content-box__right">
            <!-- Проверка дали има грешки във Формата -->
            <div class="error" v-if="errors.length">
                <h6 class="error-message">Моля, поправете следната грешка(и):</h6>
                <ul class="message-list">
                    <li v-for="error in errors" :key="error">
                        {{ error }}
                    </li>
                </ul>
            </div>
            <!-- Контактна Форма -->
            <div class="contact-form">

                <div v-if="sending" class="loading">Изпращане...</div>

                    <form class="form" @submit="checkForm">
                        <input name="name" v-model='name' placeholder="Име" type="text" autocomplete="off">
                        <input name="email" v-model="email" placeholder="Имейл" type="email" autocomplete="off">
                        <textarea name="message" v-model="message" rows="4" placeholder="Съобщение"></textarea>
                        <!-- Скрит инпут против Ботове! -->
                        <input type="text" name="website" v-model="website" class="hidden" tabindex="-1" autocomplete="off">
                        <Button text="Изпращане" v-if="!success"/>

                        <!-- <div class="message-list" v-if="success"> -->
                        <div class="message-success" v-if="success">
                            <p>Вашето съобщение е изпратено успешно!</p>
                            <b>Ще се свържем с Вас в най-скоро време!</b>
                        </div>
                    </form>
                </div>
        </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import Button from '~/components/Button'

export default {

    components: {
        Button
    },

    data() {
        return {
            errors: [],
            name: null,
            email: null,
            message: null,
            website: null,
		    sending: false,
            success: false
        }
    },
    
    methods: {

        checkForm (e) {
            this.errors = []
            this.success = false

            if (!this.name) {
                this.errors.push("Не сте въвели Име!")
            }
            if (!this.email) {
                this.errors.push('Не сте въвели Имейл!')
            } else if (!this.validEmail(this.email)) {
                this.errors.push('Имейлът е невалиден!')
            }
            if (!this.message) {
                this.errors.push("Не сте въвели съобщение!")
            }

            if (!this.errors.length) {
                this.submitForm()
            }

            e.preventDefault()
    },

    submitForm() {
      this.sending = true

      axios.post(process.env.contactUrl,
      JSON.stringify({
          form: {
            name: this.name,
            email: this.email,
            message: this.message,
             website: this.website
          }
        }),
      {
        headers: { 'Content-Type': 'application/json' }
      })
      .then(({ data }) => {
        this.sending = false

        if (data.error){
          this.errors.push(data.error)
        } else if (data.name && data.email && data.message) {
          this.name = this.email = this.message = null
          this.success = true
        }
      }).catch(error => {
        this.sending = false

        this.errors.push('Възникна грешка, моля опитайте отново по-късно!')
      })
    },

    validEmail (email) {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
		
}

</script>

<style lang="sass" scoped>

.content-box
    display: flex
    &__form
        padding: 3rem
    +break(phone)
        flex-direction: column
        text-align: center
    &__left,
    &__right
        flex: 1

    &__left
        h3
            color: $primary-color 
            font-weight: 700
            margin-bottom: 4rem
            +break(xs)
                font-weight: 500
        h2
            text-transform: uppercase
            font-size: calc(1.85vw + 2px)
            +breakPoint(md)
                font-size: 3.3rem
            +break(phone)
                margin-bottom: 15px
            +break(xs)
                    font-size: 2rem
            span 
                display: block
                +break(phone)
                    display: inline-block
                    padding: 0 7px

.hidden
    display: none
    opacity: 0
    z-index: 0

.error
    text-align: center
    &-message
        color: $primary-color
        font-size: 2rem
        margin-bottom: .5rem
    &-list
        padding: 1.5rem 0

.message-list
    color: $accent-color
    font-size: 1.5rem
    padding: .2rem 0

.message-success
    text-align: center
    p 
        color: $primary-color
        font-size: 1.5rem
        padding: .2rem 0


</style>
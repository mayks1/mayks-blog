<template>
  <div class="box">
      <h1>Изпращане на единичен URL адрес</h1>

       <h2 class="error" v-if="error">{{error}}</h2>
       <h2 class="message" v-if="message">{{message}}</h2>

    <form method="post" @submit.prevent="sendData">
      <div class="field">
        <label class="label">Въведете адрес на страница за изпращане!</label>
        <div class="control">
          <input
            type="text"
            class="input"
            name="newUrl"
            v-model="newUrl"
          />
        </div>
      </div>
      <div class="control">
        <button type="submit" class="myButton">Изпрати !!!</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      newUrl: '',
      message: '',
      error: null
    }
  },
  methods: {
    async sendData() {
 
        await axios.get(`https://api.indexnow.org/indexnow?url=${this.newUrl}&key=14043d5103c44fdea7b394163e2898aa`,
        { headers: {
              'Content-Type': 'application/json; charset=UTF-8',
              "Access-Control-Allow-Origin": '*',
              "crossDomain": true
          }
        },
          // { crossDomain: true }
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        // this.message = 'Данните са изпратени успешно!'
        // this.$router.push('/')

        // this.error = e.response.data.message
        // 14043d5103c44fdea7b394163e2898aa

    }
  }
}
</script>

<style scoped>
.label {
  display: block;
  padding: 15px 0;
}

.input {
  display: block;
  margin: 15px 0;
  padding: 5px;
  width: 100%;
}

.myButton {
	box-shadow:inset 0px 1px 0px 0px #cf866c;
	background:linear-gradient(to bottom, #d0451b 5%, #bc3315 100%);
	background-color:#d0451b;
	border-radius:3px;
	border:1px solid #942911;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:13px;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #854629;
}
.myButton:hover {
	background:linear-gradient(to bottom, #bc3315 5%, #d0451b 100%);
	background-color:#bc3315;
}
.myButton:active {
	position:relative;
	top:1px;
}



</style>
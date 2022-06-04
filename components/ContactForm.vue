<template>
  <div class="form-background">
    <div class="form-container">
      <div class="form-header">
        <h1 class="form-title">КОНТАКТНА ФОРМА / CONTACT FORM</h1>
        <p class="form-text">Моля, въведете вашето запитване</p>
        <p class="form-text">Please enter your inquiry</p>
      </div>
      <div class="form-screen">
        <div class="screen-header">
          <div class="screen-header-left">
            <div class="screen-header-button close"></div>
            <div class="screen-header-button maximize"></div>
            <div class="screen-header-button minimize"></div>
          </div>
          <div class="screen-header-right">
            <div class="screen-header-ellipsis"></div>
            <div class="screen-header-ellipsis"></div>
            <div class="screen-header-ellipsis"></div>
          </div>
        </div>
        <div class="screen-body">
          <div class="screen-body-item left">
            <div class="app-title">
              <span>ВРЪЗКА С НАС</span>
              <!-- <span>С НАС</span> -->
            </div>

            <div class="app-title">
              <span>CONTACT US</span>
              <!-- <span>US</span> -->
            </div>

            <!-- <div class="app-contact">CONTACT INFO : +62 81 314 928 595</div> -->
          </div>
          <div class="screen-body-item">
            <form name="contact-form" method="post" data-netlify="true" data-netlify-honeypot="bot-field"
              class="app-form">
              <input type="hidden" name="form-name" value="contact-form" />
              <div class="app-form-group">
                <input for="name" type="text" name="name" required class="app-form-control"
                  placeholder="ПЪЛНО ИМЕ / FULL NAME" />
              </div>
              <div class="app-form-group">
                <input type="email" name="email" required class="app-form-control" placeholder="ИМЕЙЛ / EMAIL" />
              </div>
              <div class="app-form-group message">
                <textarea class="app-form-control" name="message" required id="text" cols="30" rows="10"
                  placeholder="СЪОБЩЕНИЕ / MESSAGE"></textarea>
              </div>
              <div class="app-form-group buttons">
                <Button type="submit" value="Send message" text="ИЗПРАТИ / SEND" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.form-header {
  text-align: center;
  margin-bottom: 2rem;
}
.form-title {
  font-size: 1.8rem;
  margin-bottom: 20px;
}
.form-text {
  font-size: 1.1rem;
}

.form-background {
  display: flex;
  min-height: 100vh;
}

.form-container {
  flex: 0 1 700px;
  margin: auto;
  padding: 10px;
}

.form-screen {
  position: relative;
  background: var(--white);
  border-radius: 15px;
}

.form-screen:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 20px;
  right: 20px;
  bottom: 0;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  z-index: -1;
}

.screen-header {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background: var(--light-gray);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.screen-header-left {
  margin-right: auto;
}

.screen-header-button {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 3px;
  border-radius: 8px;
  background: white;
}

.screen-header-button.close {
  background: #ed1c6f;
}

.screen-header-button.maximize {
  background: #e8e925;
}

.screen-header-button.minimize {
  background: #74c54f;
}

.screen-header-right {
  display: flex;
}

.screen-header-ellipsis {
  width: 3px;
  height: 3px;
  margin-left: 2px;
  border-radius: 8px;
  background: #999;
}

.screen-body {
  display: flex;
}

.screen-body-item {
  flex: 1;
  padding: 20px;
}

.screen-body-item.left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

.app-title {
  display: flex;
  flex-direction: column;
  position: relative;
  color: var(--black);
  margin-bottom: 1.5rem;
  font-size: 26px;
}

.app-title:after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 25px;
  height: 4px;
  background: #ea1d6f;
}

.app-contact {
  margin-top: auto;
  font-size: 8px;
  color: #888;
}

.app-form-group {
  margin-bottom: 15px;
}

.app-form-group.message {
  margin-top: 40px;
}

.app-form-group.buttons {
  margin-bottom: 0;
  text-align: right;
}

.app-form-control {
  width: 100%;
  padding: 10px 0;
  background: none;
  border: none;
  border-bottom: 1px solid #666;
  color: var(--black);
  font-size: 16px;
  outline: none;
  transition: border-color 0.2s;
}

.app-form-control::placeholder {
  color: #666;
}

.app-form-control:focus {
  border-bottom-color: #ddd;
}

.credits {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  color: #ffa4bd;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 16px;
  font-weight: normal;
}

.credits-link {
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
}

.dribbble {
  width: 20px;
  height: 20px;
  margin: 0 5px;
}

@media screen and (max-width: 520px) {
  .screen-body {
    flex-direction: column;
  }

  .screen-body-item.left {
    margin-bottom: 30px;
  }

  .app-title {
    flex-direction: row;
  }

  .app-title span {
    margin-right: 12px;
  }

  .app-title:after {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .screen-body {
    padding: 40px;
  }

  .screen-body-item {
    padding: 0;
  }
}
</style>
<template>

  <!-- Menu -->
  <nav class="navbar stroke">
    <ul class="menu">
      <!-- <li>
        <nuxt-link to="/">Начало</nuxt-link>
      </li>
      <li>
        <nuxt-link to="#">Категории</nuxt-link>
      </li>
      <li>
        <nuxt-link to="#">Контакт</nuxt-link>
      </li> -->
    </ul>
    <!-- <AppSearchInput /> -->
  </nav>

</template>

<script>

</script>

<style scoped>
.navbar {
    /* position: sticky; */
    box-shadow: 0 3px 5px -5px var(--gray);
    margin-bottom: 25px;
}

.menu {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.menu li {
    padding: 1rem;
}

.menu li a {
    font-size: 25px;
    color: var(--white);
}

.menu li a,
.menu li a:after,
.menu li a:before {
  transition: all .5s;
}

.menu li a:hover {
  color: var(--gray);
}

/* stroke */
nav.stroke ul li a,
nav.fill ul li a {
  position: relative;
}
nav.stroke ul li a:after,
nav.fill ul li a:after {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 0%;
  content: '.';
  color: transparent;
  background: #aaa;
  height: 1px;
}
nav.stroke ul li a:hover:after {
  width: 100%;
}

nav.fill ul li a {
  transition: all 2s;
}

nav.fill ul li a:after {
  text-align: left;
  content: '.';
  margin: 0;
  opacity: 0;
}
nav.fill ul li a:hover {
  color: #fff;
  z-index: 1;
}
nav.fill ul li a:hover:after {
  z-index: -10;
  animation: fill 1s forwards;
  -webkit-animation: fill 1s forwards;
  -moz-animation: fill 1s forwards;
  opacity: 1;
}




</style>

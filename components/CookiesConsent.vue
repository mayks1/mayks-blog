<template>
    <client-only>
      <vue-cookies-consent 
          :background-button="backgroundButton"
          :background-window="backgroundWindow"
      >
        <template #title>{{ title}}</template>
        <template #description>
          <p>{{ description}}</p>
          <a href="https://policies.google.com/technologies/cookies?hl=bg" target="_blank"><p>НАУЧЕТЕ ПОВЕЧЕ / FIND OUT MORE</p></a>
        </template>
        <template #button>OK</template>
      </vue-cookies-consent>
    </client-only>
</template>

<script>
export default {
    data() {
        return {
            backgroundButton: '#E84E89',
            title: 'Този сайт използва „бисквитки“ от Google. / This site uses cookies from Google.',
            description: 'За предоставяне на услугите в него и за анализ на трафика. IP адресът и потребителският ви агент се споделят с Google заедно с показатели за ефективността и сигурността, за да се гарантира качеството на услугата, да се генерират статистически данни за употребата и да се откриват злоупотреби и да се работи по тях.',
            backgroundWindow: '#ececec',
        }
    }
}
</script>
<style>
.vcc-window {
    box-shadow: 5px 5px 6px -2px rgba(0,0,0,0.53)!important;
    width: 60%!important;
}
.vcc-window__title {
    font-size: 16px!important;
    font-weight: 700!important;
}
.vcc-window__description p {
    font-size: 12px;
}
.vcc-window__description a {
    display: block;
    margin: 15px 0;
}
.vcc-window__description a p {
    font-size: 16px;
    font-weight: 700;
    color: var(--pink);
}
.vcc-window__btn {
    padding: 10px!important;
}
</style>
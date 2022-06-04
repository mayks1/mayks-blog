<template>
  <div class="box">
    <ContactForm />
  </div>
</template>

<script>

export default {
    name: "ContacPage",
    head() {
        return {
            title: "MSpase - Контактна Форма",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "Може да зададете Вашите въпроси в Нашата Контактна Форма",
                },
            ],
            link: [
                {
                    hid: "canonical",
                    rel: "canonical",
                    href: `${this.$config.baseUrl}/contact`,
                },
            ],
        };
    },
}
</script>



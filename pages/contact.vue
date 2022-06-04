<template>
  <div class="box">
    <ContactForm />
  </div>
</template>

<script>

export default {
    name: "ContactPage",
    head() {
        return {
            title: "MSpase - Контактна Форма",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "Задайте Вашите въпроси чрез Нашата Контактна Форма",
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



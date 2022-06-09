<template>
  <div class="box">
    <ContactForm />
  </div>
</template>

<script>
import getSiteMeta from '@/utils/getSiteMeta'

export default {
    name: "ContactPage",
    computed: {
        meta() {
                const metaData = {
                    type: "contact",
                    title: "MSpase - Контактна Форма",
                    description: "Свържете се с екипа на MSpase.com и Задайте Вашите въпроси чрез Нашата Контактна Форма",
                    url: `${this.$config.baseUrl}/contact`,
                    mainImage: '',
                }
            return getSiteMeta(metaData);
        }
    },
    head() {
        return {
            title: "MSpase - Контактна Форма",
            meta: [
                ...this.meta,
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



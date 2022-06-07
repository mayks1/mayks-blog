<template>
    <VuePureLightbox
        :thumbnail="thumb ? thumb : thumb=src"
        :images="[src]"
        :alternate-text="alt"
    />
</template>

<script>
import VuePureLightbox from 'vue-pure-lightbox'
export default {
    components: {
        VuePureLightbox
    },
    props: {
        thumb:
        {
            type: String,
        },
        src: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: true
        }
    },
}
</script>
<style src="vue-pure-lightbox/dist/VuePureLightbox.css">
/* @import url("./../../node_modules/vue-pure-lightbox/dist/VuePureLightbox.css"); */

</style>
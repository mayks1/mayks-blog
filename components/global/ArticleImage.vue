<template>
    <VuePureLightbox
        :thumbnail="thumbnail"
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
    computed: {
        thumbnail() {
            if (this.thumb) {
                return this.thumb
            } else {
                return this.src
            }
        }
    }
}
</script>
<style src="vue-pure-lightbox/dist/VuePureLightbox.css">
/* @import url("./../../node_modules/vue-pure-lightbox/dist/VuePureLightbox.css"); */

</style>
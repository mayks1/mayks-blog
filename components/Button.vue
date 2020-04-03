<template>
  <button type="submit" class="button">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>

<style lang="sass" scoped>

    .button
        background-color: transparent
        border: 1px solid transparentize($primary-color, 0.6)
        border-radius: 5px
        margin-top: 1.5rem
        padding: 1rem
        +transition
        &:hover
          border: 1px solid transparentize($carousel-el-color, 0.6)
        +break(phone)
          padding: 1.5rem
        +break(xs)
          font-size: 1.6rem
        &:hover
          color: $primary-color

</style>
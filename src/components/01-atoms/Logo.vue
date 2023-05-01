<template>
  <img :src="imageSrc" alt="Logo" />
</template>

<script>
export default {
  props: {
    imageName: {
      type: String,
      required: true,
    },
  },
  computed: {
    imageSrc() {
      return require(`../../assets/images/${this.imageName}`)
    },
  },
}
</script>

<style lang="scss" scoped></style>

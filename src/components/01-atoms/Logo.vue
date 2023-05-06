<template>
  <router-link to="/">
    <img :src="imageSrc" alt="Logo" class="logo-image" @click="closeMenu" />
  </router-link>
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
  methods: {
    closeMenu() {
      this.$store.commit('updateIsMenuOpen', false)
    },
  },
}
</script>

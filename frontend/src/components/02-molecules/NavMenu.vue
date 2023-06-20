<template>
  <nav class="nav">
    <ul>
      <li><router-link :to="{ name: 'home' }">Home</router-link></li>
      <li><router-link :to="{ name: 'services' }">Services</router-link></li>
      <li><router-link :to="{ name: 'about' }">About</router-link></li>
      <li><router-link :to="{ name: 'projects' }">Projects</router-link></li>
    </ul>
  </nav>
</template>

<script>
// import { mapState, mapMutations } from 'vuex'
// import { Logo } from '../01-atoms'

export default {
  // computed: {
  //   ...mapState({
  //     isMenuOpen: (state) => state.isMenuOpen,
  //     isSubmenuOpen: (state) => state.isSubmenuOpen,
  //   }),
  // },
  // methods: {
  //   ...mapMutations(['toggleMenu']),
  //   closeMenu() {
  //     this.toggleMenu()
  //     this.$store.commit('updateIsMenuOpen', false)
  //   },
  //   toggleSubmenu() {
  //     this.$store.commit('updateIsSubmenuOpen')
  //   },
  //   teste() {
  //     alert('teste')
  //   },
  // },
}
</script>

<style lang="scss">
.nav {
  ul {
    list-style: none;
  }
}
</style>

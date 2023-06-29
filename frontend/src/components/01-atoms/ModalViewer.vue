<template>
  <div class="modal" @click="closeMenu"></div>
</template>

<script>
// import { mapMutations } from 'vuex'

export default {
  methods: {
    // ...mapMutations(['toggleMenu']),
    // closeMenu() {
    //   this.toggleMenu()
    //   this.$store.commit('updateIsMenuOpen', false)
    // },
  },
}
</script>

<style lang="scss" scoped>
.modal {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.4);
}
</style>

<template>
  <router-view />
  <button-scroll-to-top />
  <modal-viewer v-if="isMenuOpen" />
</template>

<script>
import { ButtonScrollToTop, ModalViewer } from './components/01-atoms'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: { ButtonScrollToTop, ModalViewer },
  computed: {
    ...mapState({
      isMenuOpen: (state) => state.isMenuOpen,
    }),
  },
  methods: {
    handleResize() {
      if (window.innerWidth >= 768) {
        this.$store.commit('updateIsMenuOpen', false)
      }
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Plus Jakarta Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@media (min-width: 1280px) {
  .buttonScrollTop {
    right: calc(50vw - 624px);
  }
}
</style>

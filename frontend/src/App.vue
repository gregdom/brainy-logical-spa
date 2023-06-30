<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <button-scroll-to-top />
  <!-- <modal-viewer v-if="isMenuOpen" /> -->
</template>

<script>
import { ButtonScrollToTop } from './components/01-atoms'

// import { mapState } from 'vuex'

export default {
  name: 'App',
  components: { ButtonScrollToTop },

  // computed: {
  //   ...mapState({
  //     isMenuOpen: (state) => state.isMenuOpen,
  //   }),
  // },

  async created() {
    try {
      await this.$store.dispatch('fetchDataFromServer')
    } catch (error) {
      console.log('erro teste')
    }
  },

  mounted() {
    window.addEventListener('resize', this.handleResize)
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },

  methods: {
    handleResize() {
      // if (window.innerWidth >= 768) {
      //   this.$store.commit('updateIsMenuOpen', false)
      // }
    },
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

#app {
  font-family: 'Plus Jakarta Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.grecaptcha-badge {
  right: -1000px !important;
}

@media (min-width: 1280px) {
  .buttonScrollTop {
    right: calc(50vw - 624px);
  }
}
</style>

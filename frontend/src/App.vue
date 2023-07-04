<template>
  <div>
    <div v-if="isLoadingApp">
      <loading-indicator-app />
    </div>

    <div v-else>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
  <button-scroll-to-top />
  <modal-gallery />
</template>

<script>
import {
  LoadingIndicatorApp,
  DividerHorizontal,
  ButtonScrollToTop,
} from './components/01-atoms'

import { ModalGallery } from './components/03-organisms'

// Vuex
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    LoadingIndicatorApp,
    DividerHorizontal,
    ButtonScrollToTop,
    ModalGallery,
  },

  computed: {
    ...mapState(['isLoadingApp']),
  },

  created() {
    try {
      this.$store.dispatch('queryDataFromServer')
    } catch (error) {
      return
    }
  },

  watch: {
    $route() {
      this.$store.commit('TOGGLE_OVERLAY_MENU', true)
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

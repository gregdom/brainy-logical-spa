<template>
  <router-view />
  <button-scroll-to-top />
  <div class="modal"></div>
</template>

<script>
import { ButtonScrollToTop } from './components/01-atoms'

export default {
  name: 'App',
  components: { ButtonScrollToTop },
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
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.modal {
  width: 100%;
  height: 100%;
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.7);
}

@media (min-width: 1280px) {
  .buttonScrollTop {
    right: calc(50vw - 624px);
  }
}
</style>

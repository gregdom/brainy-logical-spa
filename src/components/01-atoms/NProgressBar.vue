<template>
  <div id="nprogress-container">
    <div class="bar" role="bar"></div>
  </div>
</template>

<script>
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export default {
  mounted() {
    this.$router.beforeEach(() => {
      this.$nextTick(() => {
        NProgress.start()
      })
    })

    this.$router.afterEach(() => {
      this.$nextTick(() => {
        NProgress.done()
      })
    })
  },
}
</script>

<style lang="scss" scoped>
#nprogress-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  z-index: 9999;
  overflow: hidden;

  .bar {
    background-color: $color-highlight;
    height: 100%;
    transition: width 0.2s ease;
  }
}
</style>

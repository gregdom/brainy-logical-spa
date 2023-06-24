<template>
  <div>
    <header-component />
    <divider-horizontal />
    <transition name="fade">
      <main>
        <router-view />
      </main>
    </transition>
    <footer-component />
  </div>
</template>

<script>
import { DividerHorizontal } from '../01-atoms'
import { HeaderComponent, FooterComponent } from '../03-organisms'

export default {
  name: 'ServicesTemplate',
  components: {
    DividerHorizontal,
    HeaderComponent,
    FooterComponent,
  },
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

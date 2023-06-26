<template>
  <div>
    <header-component />
    <divider-horizontal />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
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
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

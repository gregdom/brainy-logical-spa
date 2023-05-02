<template>
  <header class="grid header">
    <div class="wrapper">
      <span
        class="material-symbols-outlined icon-menu-open-close iconOpen"
        @click="toggleMenu"
      >
        menu
      </span>
      <logo class="logo" imageName="logo-full-white-brainy-logical.png" />

      <nav-menu />
    </div>
  </header>
</template>

<script>
import { Logo } from '../01-atoms'
import { NavMenu } from '../02-molecules'

export default {
  components: { Logo, NavMenu },
}
</script>

<style lang="scss">
.header {
  width: 100%;
  height: auto;
  padding: 20px 0;
  background: $color-branding;

  .wrapper {
    @extend %base-wrapper;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon-menu-open-close {
    display: block;
    padding: 10px 20px 10px 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    font-size: 24px;
    cursor: pointer;
    color: $color-text-light;
    opacity: 0.5;

    &:hover {
      opacity: 0.7;
    }
  }

  .logo {
    width: fit-content;

    img {
      display: block;
      width: 160px;
    }
  }
}

@media (min-width: 768px) {
  .header {
    background: lightblue;
  }
}
</style>

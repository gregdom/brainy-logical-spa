<template>
  <nav class="nav" :class="{ active: isMenuOpen }">
    <div class="top">
      <span
        class="material-symbols-outlined icon-menu-open-close iconClose"
        @click="toggleMenu"
      >
        close
      </span>
      <logo class="logo" imageName="logo-full-white-brainy-logical.png" />
    </div>
    <router-link class="nav-link" to="/">Home</router-link>
    <router-link class="nav-link" to="/services">Serviços</router-link>
    <router-link class="nav-link" to="/about">Sobre</router-link>
    <router-link class="nav-link" to="/projects">Projetos</router-link>
    <router-link class="nav-link" to="/contact">Contato</router-link>
  </nav>
</template>

<script>
import { Logo } from '../01-atoms'

export default {
  components: { Logo },
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
  },
}
</script>

<style lang="scss">
.nav {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  height: 100%;
  padding: 0 1.5rem;
  position: fixed;
  top: 0;
  left: -100%;
  z-index: 20;
  transition: left 0.3s ease;
  background: $color-branding;

  &.active {
    left: 0;
  }

  .top {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    padding: 20px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .icon-menu-open-close {
      color: $color-text-light;
      opacity: 0.5;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  &-link {
    text-decoration: none;
    display: block;
    padding: 10px 0;
    color: $color-text-light;
  }
}
</style>

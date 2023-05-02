<template>
  <header class="grid header">
    <div class="wrapper">
      <span
        class="material-symbols-outlined icon-menu-open-close iconOpen"
        @click="toggleMenu"
      >
        menu
      </span>
      <logo class="logo" imageName="logo-full-black-brainy-logical.png" />

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
    </div>
  </header>
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
.header {
  width: 100%;
  height: auto;
  padding: 20px 0;

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
  }

  .logo {
    width: fit-content;

    img {
      display: block;
      width: 160px;
    }
  }

  .nav {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 90vw;
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
}

@media (min-width: 768px) {
  .header {
    background: lightblue;
  }
}
</style>

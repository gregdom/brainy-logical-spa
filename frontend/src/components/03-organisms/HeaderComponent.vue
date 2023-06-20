<template>
  <header class="header">
    <div class="container-header">
      <router-link to="/" class="logo">BRAINY<span>LOGICAL</span></router-link>

      <span
        class="material-symbols-outlined header-menu-button"
        :class="{ open: isMenuOpen }"
        @click="toggleMenu"
      >
        {{ isMenuOpen ? 'close' : 'menu' }}
      </span>
    </div>

    <div class="nav-overlay" :class="{ open: isMenuOpen }">
      <nav-menu />
    </div>
    <div class="divider"></div>
  </header>
</template>

<script>
import { NavMenu } from '../02-molecules'

export default {
  name: 'HeaderComponent',
  components: { NavMenu },
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
  padding-top: 15px;
  padding-bottom: 15px;

  .container-header {
    max-width: 1257px;
    height: inherit;
    margin-right: auto;
    margin-left: auto;
    padding-right: 16px;
    padding-left: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a.logo {
      text-decoration: none;
      font-size: 16px;
      font-weight: 800;
      border-radius: 0;
      color: #000;
      z-index: 1000;

      span {
        font-weight: 700;
      }
    }

    span.header-menu-button {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      min-width: 40px;
      padding: 10px;
      border-radius: 1000px;
      color: #fff;
      z-index: 1000;
      transition: transform 0.3s ease;
      outline: none;
      -webkit-tap-highlight-color: transparent;
      background: $color-branding;

      &:hover {
        outline: none;
      }

      &:active {
        outline: none;
      }

      &.open {
        transform: rotate(90deg);
      }
    }
  }

  .nav-overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 900;
    background: #fff;
    transform: translateX(100%);
    transition: transform 0.3s ease;

    // Actions
    &.open {
      transform: translateX(0);
    }

    .nav {
      padding-top: 100px;
    }
  }

  .divider {
    position: absolute;
    bottom: 0;
    left: 16px;
    width: calc(100% - 32px);
    height: 1px;
    background-color: #cecddd;
  }
}

@media screen and (min-width: 480px) {
  .header {
    padding-top: 20px;
    padding-bottom: 20px;

    .container-header {
      padding-right: 24px;
      padding-left: 24px;

      a.logo {
        font-size: 18px;
      }

      span.header-menu-button {
        width: 45px;
        height: 45px;
        min-width: 45px;
        padding: 10px;
        font-size: 30px;
        font-weight: 300;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .header {
    padding-top: 26px;
    padding-bottom: 26px;

    .container-header {
      span.header-menu-button {
        width: 50px;
        height: 50px;
        min-width: 50px;
        padding: 10px;
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .header {
    padding-top: 32px;
    padding-bottom: 32px;
    background-color: transparent;

    .container-header {
      span.header-menu-button {
        display: none;
      }
    }
  }
}
</style>

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

    <ul class="menu">
      <li>
        <router-link class="nav-link" :to="{ name: 'home' }" @click="closeMenu"
          >Home</router-link
        >
      </li>
      <li class="item-dropdown">
        <router-link
          class="nav-link"
          :to="{ name: 'services' }"
          @click="closeMenu"
          >Serviços
        </router-link>
        <span
          class="material-symbols-outlined iconExpand"
          :class="{ active: isSubmenuOpen }"
          @click="toggleSubmenu"
        >
          expand_more
        </span>

        <ul class="submenu" :class="{ active: isSubmenuOpen }">
          <li>
            <router-link
              class="nav-link"
              :to="{
                name: 'website-dev',
                params: { serviceName: 'website-development' },
              }"
              @click="closeMenu"
              >Criação de Sites</router-link
            >
          </li>
          <li>
            <router-link
              class="nav-link"
              :to="{
                name: 'corporate-dev',
                params: { serviceName: 'corporate-website-development' },
              }"
              @click="closeMenu"
              >Criação de Site Empresarial</router-link
            >
          </li>
          <li>
            <router-link
              class="nav-link"
              :to="{
                name: 'startup-dev',
                params: { serviceName: 'startup-website-development' },
              }"
              @click="closeMenu"
              >Criação de Sites para Startups</router-link
            >
          </li>
          <li>
            <router-link
              class="nav-link"
              :to="{
                name: 'landingpage-dev',
                params: { serviceName: 'landing-page-website-development' },
              }"
              @click="closeMenu"
              >Criação de Landing Pages</router-link
            >
          </li>
          <li>
            <router-link
              class="nav-link"
              :to="{
                name: 'extension-dev',
                params: { serviceName: 'extension-development' },
              }"
              @click="closeMenu"
              >Criação de Extensões Web</router-link
            >
          </li>
        </ul>
      </li>
      <li>
        <router-link class="nav-link" :to="{ name: 'about' }" @click="closeMenu"
          >Sobre</router-link
        >
      </li>
      <li>
        <router-link
          class="nav-link"
          :to="{ name: 'projects' }"
          @click="closeMenu"
          >Projetos</router-link
        >
      </li>
      <li>
        <router-link
          class="nav-link"
          :to="{ name: 'contact' }"
          @click="closeMenu"
          >Contato</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { Logo } from '../01-atoms'

export default {
  components: { Logo },
  computed: {
    ...mapState({
      isMenuOpen: (state) => state.isMenuOpen,
      isSubmenuOpen: (state) => state.isSubmenuOpen,
    }),
  },
  methods: {
    ...mapMutations(['toggleMenu']),
    closeMenu() {
      this.toggleMenu()
      this.$store.commit('updateIsMenuOpen', false)
    },
    toggleSubmenu() {
      this.$store.commit('updateIsSubmenuOpen')
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
  z-index: 2000;
  transition: left 0.3s ease;
  background: $color-branding;
  overflow-x: hidden;
  overflow-y: scroll;

  &.active {
    left: 0;
  }

  ul {
    list-style: none;
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

  .menu {
    width: 100%;
    height: auto;

    .item-dropdown {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;

      .iconExpand {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        cursor: pointer;
        transition: transform 0.3s ease;
        outline: none;
        color: #fff;
        background: rgba(0, 0, 0, 0.1);

        &.active {
          transform: rotate(-180deg);
        }
      }
    }

    .nav-link {
      height: 50px;
      display: inline-block;
      font-size: $font-size-base-mobile;
      text-decoration: none;
      line-height: 50px;
      color: $color-text-light;
    }

    .submenu {
      overflow: hidden;
      max-height: 0;
      transition: max-height 0.3s ease;

      &.active {
        max-height: 200px;
      }

      .nav-link {
        font-size: 1.1rem;
        margin-left: 10px;
      }
    }
  }
}
</style>

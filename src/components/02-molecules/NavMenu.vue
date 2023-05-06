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
    <router-link class="nav-link" to="#services" v-scroll-to="'#services'"
      >Serviços</router-link
    >
    <router-link class="nav-link" to="#about" v-scroll-to="'#about'"
      >Sobre</router-link
    >
    <router-link class="nav-link" to="#projects" v-scroll-to="'#projects'"
      >Projetos</router-link
    >
    <router-link class="nav-link" to="/contact">Contato</router-link>
  </nav>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { Logo } from '../01-atoms'

export default {
  components: { Logo },
  computed: {
    ...mapState(['isMenuOpen']),
  },
  methods: {
    ...mapMutations(['toggleMenu']),
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
    padding: 10px 0;
    font-size: $font-size-base;
    text-decoration: none;
    display: block;
    color: $color-text-light;
  }
}
</style>

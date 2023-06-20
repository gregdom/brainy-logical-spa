<template>
  <nav class="nav">
    <ul>
      <li class="nav-item">
        <router-link :to="{ name: 'home' }">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'services' }">Services</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'about' }">About</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'projects' }">Projects</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
// import { mapState, mapMutations } from 'vuex'
// import { Logo } from '../01-atoms'

export default {
  // computed: {
  //   ...mapState({
  //     isMenuOpen: (state) => state.isMenuOpen,
  //     isSubmenuOpen: (state) => state.isSubmenuOpen,
  //   }),
  // },
  // methods: {
  //   ...mapMutations(['toggleMenu']),
  //   closeMenu() {
  //     this.toggleMenu()
  //     this.$store.commit('updateIsMenuOpen', false)
  //   },
  //   toggleSubmenu() {
  //     this.$store.commit('updateIsSubmenuOpen')
  //   },
  //   teste() {
  //     alert('teste')
  //   },
  // },
}
</script>

<style lang="scss">
.nav {
  ul {
    list-style: none;
    padding-left: 16px;
    padding-right: 16px;

    .nav-item {
      padding-top: 13px;
      padding-bottom: 13px;
      line-height: 2rem;

      a {
        text-decoration: none;
        font-size: 28px;
        font-weight: 500;
        color: #000;
        transition: color 0.3s ease;

        // Actions
        &:hover {
          color: $color-branding;
        }

        &.router-link-active {
          font-weight: 600;
        }
      }
    }
  }
}

@media screen and (min-width: 480px) {
  .nav {
    ul {
      list-style: none;
      padding-left: 24px;
      padding-right: 24px;
    }
  }
}

@media screen and (min-width: 768px) {
  .nav {
    ul {
      .nav-item {
        a {
          font-size: 30px;
        }
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .nav {
    ul {
      .nav-item {
        a {
          font-size: 32px;
        }
      }
    }
  }
}
</style>

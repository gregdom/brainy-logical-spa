<template>
  <nav class="nav">
    <ul class="main-list">
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'home' }">Home</router-link>
      </li>
      <li class="nav-item item-container-sub-menu">
        <div>
          <router-link class="nav-link" :to="{ name: 'services' }"
            >Services</router-link
          >
          <span
            class="material-symbols-outlined"
            :class="{ active: isSubMenuOpen }"
            @click="toggleSubMenu"
          >
            keyboard_arrow_down
          </span>
        </div>
        <div class="sub-menu" :class="{ active: isSubMenuOpen }">
          <ul class="sub-list">
            <li class="sub-nav-item">
              <router-link class="nav-link" :to="{ name: 'browser-extension' }"
                >Extensão Chrome e Firefox</router-link
              >
              <router-link class="nav-link" :to="{ name: 'business-website' }"
                >Site Empresarial</router-link
              >
              <router-link
                class="nav-link"
                :to="{ name: 'landing-page-website' }"
                >Landing Pages</router-link
              >
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'about' }"
          >About</router-link
        >
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'projects' }"
          >Projects</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
// import { mapState, mapMutations } from 'vuex'
// import { Logo } from '../01-atoms'

export default {
  name: 'NavMenu',
  data() {
    return {
      isSubMenuOpen: false,
    }
  },
  // computed: {
  //   ...mapState({
  //     isMenuOpen: (state) => state.isMenuOpen,
  //     isSubmenuOpen: (state) => state.isSubmenuOpen,
  //   }),
  // },
  methods: {
    // ...mapMutations(['toggleMenu']),
    // closeMenu() {
    //   this.toggleMenu()
    //   this.$store.commit('updateIsMenuOpen', false)
    // },
    // toggleSubmenu() {
    //   this.$store.commit('updateIsSubmenuOpen')
    // },
    // teste() {
    //   alert('teste')
    // },
    toggleSubMenu() {
      this.isSubMenuOpen = !this.isSubMenuOpen
    },
  },
}
</script>

<style lang="scss">
.nav {
  ul.main-list {
    list-style: none;
    padding-left: 16px;
    padding-right: 16px;

    li.nav-item {
      padding-top: 13px;
      padding-bottom: 13px;
      line-height: 2rem;

      a.nav-link {
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

      &.item-container-sub-menu {
        div:first-child {
          width: 100%;
          height: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;

          span {
            font-size: 38px;
            color: $color-branding;
            cursor: pointer;
            transition: transform 0.2s ease;

            &.active {
              transform: rotate(180deg);
            }
          }
        }

        .sub-menu {
          max-height: 0;
          opacity: 0;
          transition: max-height 0.3s ease, opacity 0.3s ease;
          overflow: hidden;

          ul.sub-list {
            list-style: none;
            padding-top: 7px;

            li.sub-nav-item {
              a.nav-link {
                display: block;
                font-size: 16px;
                color: #566688;
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

          &.active {
            max-height: fit-content;
            opacity: 1;
          }
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

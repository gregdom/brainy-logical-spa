<template>
  <nav class="nav">
    <ul class="main-list">
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'home' }">Home</router-link>
      </li>
      <li class="nav-item item-container-sub-menu">
        <div>
          <div class="fake-link-item" @click="toggleSubMenu">
            <div class="bold-link" :class="{ bold: isServicesRoute }">
              Services
            </div>
          </div>
          <span
            class="material-symbols-outlined"
            :class="{ active: isSubMenuOpen }"
          >
            keyboard_arrow_down
          </span>
        </div>
        <transition name="fade">
          <div class="sub-menu" :class="{ active: isSubMenuOpen }">
            <ul class="sub-list">
              <li class="sub-nav-item">
                <router-link class="nav-link" :to="{ name: 'services' }"
                  >Página de Serviços
                </router-link>
                <router-link
                  class="nav-link"
                  :to="{ name: 'browser-extension' }"
                  >Extensão Chrome e Firefox
                </router-link>
                <router-link class="nav-link" :to="{ name: 'business-website' }"
                  >Site Empresarial
                </router-link>
                <router-link
                  class="nav-link"
                  :to="{ name: 'landing-page-website' }"
                  >Landing Pages
                </router-link>
              </li>
            </ul>
          </div>
        </transition>
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
      <li class="nav-item nav-item-contact">
        <router-link class="nav-link nav-link-contact" :to="{ name: 'contact' }"
          >Contact us</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
// import { mapState, mapMutations } from 'vuex'
// import { ButtonPrimary } from '../01-atoms'

export default {
  name: 'NavMenu',
  components: {},

  data() {
    return {
      isSubMenuOpen: false,
    }
  },

  computed: {
    isServicesRoute() {
      const currentRoute = this.$route
      return currentRoute.matched.some((record) =>
        record.path.includes('/services')
      )
    },
  },

  mounted() {},

  methods: {
    toggleSubMenu() {
      this.isSubMenuOpen = !this.isSubMenuOpen
    },
  },
}
</script>

<style lang="scss">
.bold {
  font-weight: 700;
}

.nav {
  ul.main-list {
    list-style: none;
    padding-left: 16px;
    padding-right: 16px;

    li.nav-item {
      padding-top: 13px;
      padding-bottom: 13px;
      line-height: 2rem;

      a.nav-link,
      .fake-link-item {
        text-decoration: none;
        font-size: 28px;
        font-weight: 500;
        color: $color-general-headers;
        transition: color 0.3s ease;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;

        // Actions
        &:hover {
          color: $color-branding;
        }

        &.router-link-active {
          font-weight: 700;
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
            -webkit-tap-highlight-color: transparent;

            &.active {
              transform: rotate(-180deg);
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
                color: $color-general-text-bglight;
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
    ul.main-list {
      list-style: none;
      padding-left: 24px;
      padding-right: 24px;
    }
  }
}

@media screen and (min-width: 768px) {
  .nav {
    ul.main-list {
      li.nav-item {
        a.nav-link {
          font-size: 30px;
        }
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .nav {
    ul.main-list {
      display: flex;
      padding-left: 0;
      padding-right: 0;

      li.nav-item {
        padding-top: 0;
        padding-bottom: 0;
        margin-right: 32px;

        &:last-child {
          margin-right: 0;
        }

        a.nav-link,
        .fake-link-item {
          font-size: 16px;
          line-height: 48px;

          &.nav-link-contact {
            padding: 16px 22px;
            display: block;
            border-radius: 10px;
            transition: transform 350ms ease, box-shadow 350ms ease,
              background-color 350ms ease, -webkit-transform 350ms ease;
            line-height: 1em;
            text-align: center;
            font-weight: 600;
            color: #fff;
            background: $color-branding;

            &:hover {
              &:hover {
                background: $color-branding-dark;
                box-shadow: 0 0 0 0 rgba(48, 44, 255, 0.1);
                -webkit-transform: scale3d(0.95, 0.95, 1.01);
                transform: scale3d(0.95, 0.95, 1.01);
                color: $color-white;
              }
            }
          }
        }

        &.item-container-sub-menu {
          position: relative;

          div:first-child {
            span {
              margin-top: 5px;
              margin-left: 4px;
              color: $color-branding;
              cursor: pointer;
              font-size: 22px;
            }
          }

          .sub-menu {
            width: 270px;
            max-height: fit-content;
            padding: 8px 24px;
            border-radius: 25px;
            border: $border-default;
            position: absolute;
            top: 50px;
            left: -50px;
            z-index: 1000;
            overflow: hidden;
            background: $color-white;
            pointer-events: none;

            ul.sub-list {
              list-style: none;
              padding-top: 0;

              li.sub-nav-item {
                padding: 0;
                line-height: 2.5rem;

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
              pointer-events: unset;
            }
          }
        }
      }
    }
  }
}
</style>

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
import { mapMutations } from 'vuex'
import { Logo } from '../01-atoms'
import { NavMenu } from '../02-molecules'

export default {
  components: { Logo, NavMenu },
  methods: {
    ...mapMutations(['toggleMenu']),
  },
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
    width: 100%;
    height: 80px;
    padding: 0;
    display: flex;
    align-items: center;

    .wrapper {
      position: unset;
      max-width: 940px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .nav {
        all: unset;
        // display: flex;

        .top {
          display: none;
        }

        .menu {
          display: flex;

          li {
            margin-right: 20px;

            &:last-child {
              margin-right: 0;
            }
          }

          .item-dropdown {
            all: unset;
            position: relative;

            .iconExpand {
              display: none;

              &.active {
                transform: rotate(-180deg);
              }
            }
          }

          .nav-link {
            all: unset;
            margin-right: 20px;
            padding: 10px 0;
            font-size: $font-size-base;
            text-decoration: none;
            display: block;
            color: $color-text-light;
          }

          .nav-link:last-child {
            margin-right: 0;
          }

          .submenu {
            all: unset;
            width: 250px;
            height: auto;
            display: block;
            position: absolute;
            top: 55px;
            border-top: 3px solid #fff;
            border-radius: 5px;
            transition: max-height 0.3s ease;
            overflow: hidden;
            box-shadow: 0 26px 21px rgba(14, 18, 29, 0.48);
            background: $color-branding;

            &.active {
              max-height: 200px;
            }

            .nav-link {
              all: unset;
              cursor: pointer;
              display: block;
              width: 250px;
              height: 40px;
              line-height: 40px;
              margin-left: 0;
              padding-left: 20px;
              font-size: 0.925rem;
              color: #fff;
              transition: 0.2s;

              &:hover {
                background: rgba(0, 0, 0, 0.1);
              }
            }
          }
        }
      }
    }

    .icon-menu-open-close {
      display: none;
    }

    .logo {
      width: fit-content;

      img {
        display: block;
        width: 160px;
      }
    }
  }
}
</style>

<template>
  <header class="header">
    <div class="container-header">
      <h1 class="logo">BRAINY<span>LOGICAL</span></h1>

      <span
        class="material-symbols-outlined header-menu-button iconOpen"
        @click="toggleMenu"
      >
        menu
      </span>

      <!-- <nav-menu /> -->
    </div>

    <div class="divider"></div>
  </header>
</template>

<script>
// import { mapMutations } from 'vuex'
// import { Logo } from '../01-atoms'
// import { NavMenu } from '../02-molecules'

export default {
  components: {},
  // methods: {
  //   ...mapMutations(['toggleMenu']),
  // },
}
</script>

<style lang="scss">
.header {
  padding-top: 15px;
  padding-bottom: 15px;
  position: relative;

  .container-header {
    max-width: 1257px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 16px;
    padding-left: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1.logo {
      font-size: 16px;
      font-weight: 800;
      border-radius: 0;
      color: #000;

      span {
        font-weight: 700;
      }
    }

    span.header-menu-button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      min-width: 40px;
      padding: 10px;
      border-radius: 1000px;
      color: #fff;
      background: $color-branding;
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
      span.header-menu-button {
        width: 45px;
        height: 45px;
        min-width: 45px;
        padding: 10px;
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
    border-bottom: 1px solid #000;

    .container-header {
      span.header-menu-button {
        display: none;
      }
    }
  }
}

// .header {
//   width: 100%;
//   height: auto;
//   padding: 20px 0;
//   position: absolute;
//   z-index: 2000;

//   .wrapper {
//     @extend %base-wrapper;
//     position: relative;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .icon-menu-open-close {
//     display: block;
//     padding: 10px 20px 10px 0;
//     position: absolute;
//     top: 50%;
//     transform: translateY(-50%);
//     left: 0;
//     font-size: 24px;
//     cursor: pointer;
//     color: $color-text-light;
//     opacity: 0.5;

//     &:hover {
//       opacity: 0.7;
//     }
//   }

//   .logo {
//     width: fit-content;

//     img {
//       display: block;
//       width: 160px;
//     }
//   }
// }

// @media (min-width: 768px) {
//   .header {
//     width: 100%;
//     height: 80px;
//     padding: 0;
//     display: flex;
//     align-items: center;

//     .wrapper {
//       position: unset;
//       max-width: 940px;
//       display: flex;
//       justify-content: space-between;
//       align-items: center;

//       .nav {
//         all: unset;

//         .top {
//           display: none;
//         }

//         .menu {
//           display: flex;

//           li {
//             margin-right: 20px;

//             &:last-child {
//               margin-right: 0;
//             }
//           }

//           .item-dropdown {
//             all: unset;
//             position: relative;

//             &:hover {
//               .submenu {
//                 // height: 200px;
//                 opacity: 1;
//                 visibility: visible;
//                 transform: translateY(-20px);
//               }
//             }

//             .iconExpand {
//               display: none;

//               &.active {
//                 transform: rotate(-180deg);
//               }
//             }
//           }

//           .nav-link {
//             all: unset;
//             cursor: pointer;
//             height: 100%;
//             margin-right: 20px;
//             padding: 10px 0;
//             font-size: $font-size-base;
//             text-decoration: none;
//             display: block;
//             color: $color-text-light;
//           }

//           .nav-link:last-child {
//             margin-right: 0;
//           }

//           .submenu {
//             all: unset;
//             width: 250px;
//             height: 200px;
//             opacity: 0;
//             visibility: hidden;
//             transition: opacity 0.3s ease, transform 0.3s ease;
//             position: absolute;
//             top: 71px;
//             border-left: 3px solid $color-highlight;
//             overflow: hidden;
//             box-shadow: 0 26px 21px rgba(14, 18, 29, 0.48);
//             background: #fff;

//             &.active {
//               height: 200px;
//             }

//             .nav-link {
//               all: unset;
//               cursor: pointer;
//               display: block;
//               width: 250px;
//               height: 40px;
//               line-height: 40px;
//               margin-left: 0;
//               padding-left: 20px;
//               font-size: 0.925rem;
//               color: #353535;

//               &:hover {
//                 background: rgba(0, 0, 0, 0.1);
//               }
//             }
//           }
//         }
//       }
//     }

//     .icon-menu-open-close {
//       display: none;
//     }

//     .logo {
//       width: fit-content;

//       img {
//         display: block;
//         width: 160px;
//       }
//     }
//   }
// }
</style>

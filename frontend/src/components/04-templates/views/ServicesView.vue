<template>
  <div>
    <services-component
      titleServices="We are development experts on all technologies & platforms."
      routeName="services"
    />
    <divider-horizontal />
    <testimonial-component />
  </div>
</template>

<script>
import { DividerHorizontal } from '../../01-atoms'
import { ServicesComponent, TestimonialComponent } from '../../03-organisms'

export default {
  name: 'ServicesView',
  components: {
    ServicesComponent,
    TestimonialComponent,
    DividerHorizontal,
  },
}
</script>

<style lang="scss" scoped>
// .services {
//   width: 100%;
//   height: auto;
//   margin: 0 auto;
//   padding-top: 30px;
//   padding-bottom: 60px;
//   background: #eee;

//   .container-default {
//     max-width: 1257px;
//     margin-right: auto;
//     margin-left: auto;
//     padding-left: 16px;
//     padding-right: 16px;

//     .top {
//       max-width: 100%;
//       background: blue;
//       margin-bottom: 20px;

//       .subtitle {
//         margin-bottom: 8px;
//         font-size: 20px;
//         font-weight: 500;
//         letter-spacing: -0.02em;
//         line-height: 1em;
//         color: $color-branding;
//       }

//       h2 {
//         margin-top: 0px;
//         margin-bottom: 30px;
//         font-size: 26px;
//         line-height: 1.368em;
//         font-weight: 800;
//         letter-spacing: -0.02em;
//         text-shadow: 0 3px 6px rgba(39, 99, 228, 0.11);
//         color: #071221;
//       }
//     }

//     .text-center {
//       text-align: center;
//     }

//     .slide-services {
//       .swiper-slide {
//         max-width: 385px;
//       }
//     }
//   }
// }

// @media screen and (min-width: 480px) {
//   .services {
//     width: 100%;
//     height: auto;
//     margin: 0 auto;
//     padding-top: 40px;
//     padding-bottom: 100px;

//     .container-default {
//       padding-left: 24px;
//       padding-right: 24px;

//       .top {
//         max-width: 575px;
//         margin-bottom: 20px;
//         margin-left: auto;
//         margin-right: auto;

//         div.subtitle {
//           margin-bottom: 10px;
//         }

//         h2 {
//           font-size: 33px;
//           margin-bottom: 40px;
//         }
//       }
//     }
//   }
// }

// @media screen and (min-width: 768px) {
//   .services {
//     padding-top: 60px;
//     padding-bottom: 120px;

//     .container-default {
//       .top {
//         max-width: 690px;
//         margin-bottom: 20px;
//         margin-left: auto;
//         margin-right: auto;

//         div.subtitle {
//           margin-bottom: 16px;
//         }

//         h2 {
//           font-size: 40px;
//         }
//       }
//     }
//   }
// }

// @media screen and (min-width: 992px) {
//   .services {
//     padding-top: 94px;
//     padding-bottom: 160px;

//     .container-default {
//       .top {
//         max-width: 761px;
//         margin-bottom: 20px;
//         margin-left: auto;
//         margin-right: auto;

//         div.subtitle {
//           margin-bottom: 16px;
//         }

//         h2 {
//           margin-bottom: 50px;
//           font-size: 48px;
//           line-height: 1.291em;
//         }
//       }
//     }
//   }
// }
</style>

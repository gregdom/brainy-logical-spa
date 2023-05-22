<template>
  <section class="services" id="services">
    <div class="wrapper">
      <h3>Serviços</h3>

      <div class="block-services">
        <card-service
          class="block-cards"
          v-for="(service, index) in services"
          :key="index"
          :icon="service.icon"
          :title="service.title"
          :description_short="service.description_short"
          :link="service.link"
          :name="service.name"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { CardService } from '../02-molecules'
import { mapState } from 'vuex'

export default {
  components: { CardService },
  computed: {
    ...mapState({
      services: (state) => state.services,
    }),
  },
}
</script>

<style lang="scss">
.services {
  width: 100%;
  max-width: 1400px;
  height: auto;
  margin: 0 auto;
  padding: 57px 0 64px 0;
  // background: #fff;

  .wrapper {
    width: calc(100% - 48px);
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      font-size: $section-title-size;
      text-align: center;
      margin-bottom: 20px;
    }

    .block-services {
      display: flex;
      flex-wrap: wrap;
      // flex-direction: column;
      justify-content: center;
      align-items: center;

      .block-cards {
        max-width: 300px;
        margin-top: 92px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}

@media (min-width: 600px) {
  .services {
    .wrapper {
      width: 500px;

      .block-cards {
        max-width: inherit;
      }
    }
  }
}

@media (min-width: 768px) {
  .services {
    padding: 50px 0 64px 0;

    .wrapper {
      width: 90%;

      .block-services {
        display: flex;
        margin-left: 20px;

        .block-cards {
          max-width: 300px;
          margin-right: 20px;
          // margin-bottom: 0px !important;

          // &:nth-child(2n) {
          //   margin-right: 0;
          // }

          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
}

// @media (min-width: 1020px) {
//   .services {
//     padding: 50px 0 64px 0;

//     .wrapper {
//       width: 90%;

//       .block-services {
//         display: flex;

//         .block-cards {
//           max-width: 300px;
//           margin-right: 20px;
//           // margin-bottom: 0px !important;

//           &:nth-child(2n) {
//             margin-right: 20px;
//           }

//           &:last-child {
//             margin-right: 0;
//           }
//         }
//       }
//     }
//   }
// }
</style>

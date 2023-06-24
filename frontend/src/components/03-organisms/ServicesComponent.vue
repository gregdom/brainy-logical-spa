<template>
  <section class="section home-services">
    <div class="container-default">
      <div class="top">
        <div class="subtitle">Nossos Serviços</div>
        <h2>{{ titleServices }}</h2>
      </div>

      <div class="slide-services">
        <swiper
          :slidesPerView="'auto'"
          :spaceBetween="27"
          :pagination="{
            clickable: true,
          }"
          :navigation="false"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide v-for="(service, index) in services" :key="index">
            <card-service
              class="block-cards"
              :icon="service.icon"
              :title="service.title"
              :description_short="service.description_short"
              :link="service.link"
              :name="service.name"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import {} from '../01-atoms'
import { CardService } from '../02-molecules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../../assets/styles/style-swiper.css'

import { Pagination, Navigation } from 'swiper'

export default {
  name: 'HeroComponent',
  components: { CardService, Swiper, SwiperSlide },

  props: {
    titleServices: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      services: [
        {
          icon: 'puzzle-64.png',
          title: 'Extensão para Browsers',
          description_short:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id integer ut faucibus sem risus. Praesent sagittis, ut diam diam odio faucibus lorem. Sollicitudin faucibus.',
          link: 'browser-extension',
          name: 'extension',
        },
        {
          icon: 'website-statistics-64.png',
          title: 'Criação de Sites',
          description_short:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id integer ut faucibus sem risus. Praesent sagittis, ut diam diam odio faucibus lorem. Sollicitudin faucibus.',
          link: 'business-website',
          name: 'sites',
        },
        {
          icon: 'landing-page-64-black.png',
          title: 'Landing Pages',
          description_short:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id integer ut faucibus sem risus. Praesent sagittis, ut diam diam odio faucibus lorem. Sollicitudin faucibus.',
          link: 'landing-page-website',
          name: 'landing-pages',
        },
      ],
    }
  },

  setup() {
    return {
      modules: [Pagination, Navigation],
    }
  },

  methods: {},
}
</script>

<style lang="scss">
.home-services {
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 80px;

  .container-default {
    max-width: 1257px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 16px;
    padding-right: 16px;

    .top {
      max-width: 575px;
      margin-bottom: 20px;

      div.subtitle {
        margin-bottom: 8px;
        font-size: 20px;
        font-weight: 500;
        letter-spacing: -0.02em;
        line-height: 1em;
        color: $color-branding;
      }

      h2 {
        margin-top: 0px;
        margin-bottom: 25px;
        font-size: 26px;
        line-height: 1.368em;
        font-weight: 800;
        letter-spacing: -0.02em;
        text-shadow: 0 3px 6px rgba(39, 99, 228, 0.11);
        color: #071221;
      }
    }

    .slide-services {
      .swiper-slide {
        max-width: 385px;
      }
    }
  }
}

@media screen and (min-width: 480px) {
  .home-services {
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding-top: 30px;
    padding-bottom: 40px;

    .container-default {
      padding-left: 24px;
      padding-right: 24px;

      .top {
        max-width: 575px;
        margin-bottom: 20px;

        div.subtitle {
          margin-bottom: 10px;
        }

        h2 {
          font-size: 31px;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .home-services {
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding-top: 30px;
    padding-bottom: 60px;

    .container-default {
      .top {
        max-width: 575px;
        margin-bottom: 20px;

        div.subtitle {
          margin-bottom: 16px;
        }

        h2 {
          font-size: 38px;
        }
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .home-services {
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding-top: 30px;
    padding-bottom: 130px;

    .container-default {
      .top {
        max-width: 575px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>

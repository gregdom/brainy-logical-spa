<template>
  <section class="section" :class="routeName">
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
    routeName: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      services: [
        {
          icon: 'extension.svg',
          title: 'Extensão para Browsers',
          description_short:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id integer ut faucibus sem risus. Praesent sagittis, ut diam diam odio faucibus lorem. Sollicitudin faucibus.',
          link: 'browser-extension',
          name: 'extension',
        },
        {
          icon: 'website-statistics-64.svg',
          title: 'Criação de Sites',
          description_short:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id integer ut faucibus sem risus. Praesent sagittis, ut diam diam odio faucibus lorem. Sollicitudin faucibus.',
          link: 'business-website',
          name: 'sites',
        },
        {
          icon: 'landing-page.svg',
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

<style lang="scss" scoped>
@import '@/assets/scss/services.scss';
</style>

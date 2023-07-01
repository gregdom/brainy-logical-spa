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

// Vuex
import { mapState } from 'vuex'

// Swiper
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

  computed: {
    ...mapState({
      services: (state) => state.data.services,
    }),
  },

  setup() {
    return {
      modules: [Pagination, Navigation],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/services.scss';
</style>

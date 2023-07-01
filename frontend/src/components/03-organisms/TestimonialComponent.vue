<template>
  <section class="section home-testimonials">
    <div class="container-default">
      <div class="top">
        <div class="subtitle">Exemplos de sucesso</div>
        <h2>Cases de clientes satisfeitos através do nosso trabalho.</h2>
      </div>

      <div class="slide-testimonials">
        <swiper
          :slidesPerView="slidesPerView"
          :spaceBetween="27"
          :pagination="{
            clickable: true,
          }"
          :navigation="false"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide
            v-for="(testimonial, index) in testimonials"
            :key="index"
          >
            <card-testimonial
              class="block-cards"
              :path="testimonial.path"
              :highlight="testimonial.highlight"
              :description="testimonial.description"
              :name="testimonial.name"
              :work="testimonial.work"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import {} from '../01-atoms'
import { CardTestimonial } from '../02-molecules'

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
  name: 'TestimonialComponent',
  components: { CardTestimonial, Swiper, SwiperSlide },

  data() {
    return {
      slidesPerView: 1,
    }
  },

  setup() {
    return {
      modules: [Pagination, Navigation],
    }
  },

  computed: {
    ...mapState({
      testimonials: (state) => state.data.testimonials,
    }),
  },

  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },

  methods: {
    handleResize() {
      if (window.innerWidth >= 768) {
        this.slidesPerView = 2
      } else {
        this.slidesPerView = 1
      }
    },
  },
}
</script>

<style lang="scss">
.home-testimonials {
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
        color: $color-general-headers;
      }
    }
  }
}

@media screen and (min-width: 480px) {
  .home-testimonials {
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding-top: 100px;
    padding-bottom: 100px;

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
  .home-testimonials {
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding-top: 120px;
    padding-bottom: 120px;

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
  .home-testimonials {
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding-top: 160px;
    padding-bottom: 160px;

    .container-default {
      width: 100%;

      .top {
        max-width: 575px;
        margin-bottom: 20px;
      }

      .slide-testimonials {
        width: 100%;
      }
    }
  }
}
</style>

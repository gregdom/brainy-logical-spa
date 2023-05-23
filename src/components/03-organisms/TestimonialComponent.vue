<template>
  <section class="testimonial" id="testimonial">
    <div class="wrapper">
      <h3>O Que Falam da Gente</h3>

      <swiper
        :slidesPerView="slidesPerView"
        :spaceBetween="20"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper cardTestimonial"
      >
        <swiper-slide
          class="elementSwiperSlide"
          v-for="(testimonial, index) in testimonialsArr"
          :key="index"
        >
          <div class="imageContainer">
            <img
              :src="require(`../../assets/images/${testimonial.image_path}`)"
              alt="Imagem de Projeto"
            />
          </div>

          <div class="details">
            <h4>{{ testimonial.title }}</h4>

            <p>{{ testimonial.description }}</p>
            <p class="clientName">{{ testimonial.name }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper'

import { mapState } from 'vuex'

export default {
  components: {
    Swiper,
    SwiperSlide,
    // CardTestimonial,
  },
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
    ...mapState(['testimonials']),
    testimonialsArr() {
      if (this.testimonials.length > 0) {
        return this.testimonials
      }
      return ''
    },
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
.testimonial {
  width: 100%;
  max-width: 1400px;
  height: auto;
  margin: 0 auto;
  padding: 57px 0 64px 0;
  background: $color-branding;

  .wrapper {
    width: calc(100% - 48px);
    height: auto;
    margin: 0 auto;
    // background: #fff;

    h3 {
      margin: 0 auto 32px auto;
      padding-bottom: 5px;
      width: fit-content;
      font-size: $section-title-size;
      text-align: center;
      color: #fff;
    }

    .elementSwiperSlide {
      width: 100%;
      max-width: auto;
      height: auto;
      padding: 0 0 20px 0;
      // border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      background: #fff;

      .imageContainer {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          display: block;
          margin-top: 20px;
        }
      }

      .details {
        width: 100%;
        height: auto;
        padding: 0 20px;

        h4 {
          margin: 20px auto 15px auto;
          padding: 5px 10px;
          width: fit-content;
          font-size: $general-title-size;
          text-align: center;
          color: $color-text-dark;
          background: $color-highlight;
        }

        p {
          padding-bottom: 20px;
          font-size: $font-size-base;
          line-height: $general-line-height;
          font-style: italic;
          text-align: center;
          color: $color-general-text;
        }

        p.clientName {
          text-align: right;
          font-weight: 600;
        }
      }
    }

    .mySwiper {
      // background-color: #fff !important;

      .swiper-button-next,
      .swiper-button-prev {
        color: #000 !important;
        opacity: 0.4;
        transition: opacity 0.2s ease-in-out;

        &:hover {
          opacity: 1;
        }
      }

      .swiper-pagination-bullet-active {
        background: $color-branding;
      }
    }
  }
}

@media (min-width: 600px) {
  .testimonial {
    .wrapper {
      width: 500px;
    }
  }
}

@media (min-width: 768px) {
  .testimonial {
    .wrapper {
      width: 90%;
      max-width: 940px;
    }
  }
}
</style>

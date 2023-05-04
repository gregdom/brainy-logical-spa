<template>
  <section class="testimonial">
    <div class="wrapper">
      <h3>O Que Falam da Gente</h3>

      <swiper
        :slidesPerView="1"
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
          v-for="(testimonial, index) in testimonials"
          :key="index"
        >
          <div class="imageContainer">
            <img
              :src="require(`../../assets/images/${testimonial.image}`)"
              alt="Imagem de Projeto"
            />
          </div>

          <div class="details">
            <h4>{{ testimonial.businessName }}</h4>

            <p>
              {{ testimonial.description }}
            </p>

            <p class="clientName">
              {{ testimonial.clientName }}
            </p>
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

// import { CardTestimonial } from '../02-molecules'

export default {
  components: {
    Swiper,
    SwiperSlide,
    // CardTestimonial,
  },
  data() {
    return {
      testimonials: [
        {
          image: 'testimonial-face-1.png',
          businessName: 'GameStore',
          description:
            '“Estou muito satisfeito com a loja de jogos eletrônicos GameStore desenvolvida pela equipe. O design é incrível e a usabilidade é perfeita para nossos clientes. Agora, nossas vendas online aumentaram significativamente e o feedback dos clientes é excelente. O desafio de fazer o Marketplace foi cumprido no prazo. Obrigado pelo excelente trabalho!”',
          clientName: 'Eduardo Mitt',
        },
        {
          image: 'testimonial-face-2.png',
          businessName: 'SCViagens',
          description:
            '"A equipe da Brainy Logical fez um trabalho incrível no desenvolvimento do nosso site de turismo. A plataforma é fácil de usar, as informações são completas e a experiência do usuário é fantástica. Agora, estamos recebendo mais reservas online e nossos clientes estão felizes. Sempre vou recomendar a Brainy para quem precisar de um site.”',
          clientName: 'Pedro Henrique',
        },
      ],
    }
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    }
  },
  computed: {
    imageSrc() {
      return require(`../../assets/images/${this.image}`)
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
  background: #fff;

  .wrapper {
    width: calc(100% - 48px);
    height: auto;
    margin: 0 auto;
    background: #fff;

    h3 {
      font-size: $section-title-size;
      text-align: center;
      padding: 0 20px 32px 20px;
    }

    .elementSwiperSlide {
      width: 100%;
      max-width: auto;
      height: auto;
      padding: 0 0 20px 0;
      border: 1px solid rgba(0, 0, 0, 0.1);
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
          padding: 20px 0 15px 0;
          font-size: $general-title-size;
          text-align: center;
          color: $color-text-dark;
        }

        p {
          padding-bottom: 20px;
          font-size: $font-size-base;
          line-height: $general-line-height;
          font-style: italic;
          text-align: center;
        }

        p.clientName {
          text-align: right;
          font-weight: 600;
        }
      }
    }

    .mySwiper {
      background-color: #fff !important;

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
</style>

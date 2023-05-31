<template>
  <div>
    <header-component />
    <hero-component
      titleHero="Serviço de Criação Web"
      :subTitleHero="service ? service.description_short : ''"
    />
    <main>
      <section class="single-service-init">
        <div class="wrapper">
          <div class="block-desc">
            <h3>Serviço de Criação Web</h3>
            <span class="subtitle">
              Utilizando as tecnologias HTML5/CSS3 (Sass/SCSS), JavaScript
              (Vue.js, Node.js, Express), MySQL entre outras, construimos Sites
              e Extensões Web de alto desempenho e interativos.
            </span>
          </div>

          <div class="block-cards">
            <div class="columns">
              <a href="corporate-website-development" class="link1">
                <article>
                  <img
                    src="../../../assets/images/web.png"
                    alt="Imagem ilustrativa serviço web"
                  />
                  <h4 class="card-title">Site Empresarial</h4>
                  <p class="card-descr">
                    Sua empresa em um espaço online 24 horas por dia
                  </p>
                </article>
              </a>
            </div>

            <div class="columns">
              <a href="startup-website-development" class="link2">
                <article>
                  <img
                    src="../../../assets/images/web.png"
                    alt="Imagem ilustrativa serviço web"
                  />
                  <h4 class="card-title">Site para Startup</h4>
                  <p class="card-descr">
                    Potencialize sua startup com um site inovador e escalável.
                  </p>
                </article>
              </a>

              <a href="landing-page-website-development" class="link3">
                <article>
                  <img
                    src="../../../assets/images/web.png"
                    alt="Imagem ilustrativa serviço web"
                  />
                  <h4 class="card-title">Landing Pages</h4>
                  <p class="card-descr">
                    Tenha uma Landing Page funcional para capturar leads e fazer
                    vendas.
                  </p>
                </article>
              </a>
            </div>

            <div class="columns">
              <a href="extension-development" class="link4">
                <article>
                  <img
                    src="../../../assets/images/web.png"
                    alt="Imagem ilustrativa serviço web"
                  />
                  <h4 class="card-title">Extensões Web</h4>
                  <p class="card-descr">
                    Explore novas funções e personalize o seu navegador com
                    extensões.
                  </p>
                </article>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="sub-services">
        <div class="wrapper">
          <div class="firstBlock">
            <h3>
              O que faz a <span>Brainy</span> ser a melhor escolha para criar
              seu projeto?
            </h3>

            <span class="subtitle"
              >What is included in web development services?</span
            >
          </div>

          <div class="secondBlock">
            <div class="cell">
              <div class="num">1</div>
              <div class="desc">
                <p>
                  Construimos sites personalizados e responsivos, utilizando as
                  melhores práticas de desenvolvimento, tecnologias modernas e
                  SEO amigável para impulsionar sua presença online e trazer
                  visibilidade para o seu negócio.
                </p>
              </div>
            </div>

            <div class="cell">
              <div class="num">2</div>
              <div class="desc">
                <p>
                  Nossa equipe cria projetos web sob medida, ouvindo as
                  necessidades que você tem e os objetivos que deseja alcançar.
                  Assim conseguimos criar um laço de confiança com você e
                  refletir isso no projeto final.
                </p>
              </div>
            </div>

            <div class="cell">
              <div class="num">3</div>
              <div class="desc">
                <p>
                  Sabemos que seus clientes podem estar em vários lugares e que
                  o seu negócio deve estar preparado para entregar uma boa
                  experiência tanto no mobile quanto no desktop. Por isso
                  entregamos apenas sites e aplicações responsivas, que se
                  adaptam a todas as telas.
                </p>
              </div>
            </div>

            <div class="cell">
              <div class="num">4</div>
              <div class="desc">
                <p>
                  Garantimos que seu site seja rápido, moderno, responsivo e
                  tenha SEO amigável, seguindo as melhores práticas de
                  desenvolvimento atuais, para que você obtenha melhores
                  resultados e alcance seu público-alvo de forma eficaz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="benefits">
        <div class="wrapper">
          <h3>Seu sucesso. Nossa especialização.</h3>

          <div class="cards">
            <swiper
              :slidesPerView="slidesPerView"
              :spaceBetween="20"
              :loop="true"
              :pagination="{
                clickable: true,
              }"
              :navigation="true"
              :modules="modules"
              class="mySwiper cardBenefits"
            >
              <swiper-slide class="elementSwiperSlide benefit1">
                <div class="imageContainer">
                  <img
                    src="../../../assets/images/icons8-conversa-64.png"
                    alt=""
                  />
                </div>

                <div class="details">
                  <h4>Proximidade com seu cliente</h4>

                  <p class="single-service-flip__text--full">
                    Com um site você permite uma comunicação direta e imediata
                    dos seus clientes com seu negócio, criando um canal de
                    interação e facilitando o atendimento personalizado.
                  </p>
                </div>
              </swiper-slide>

              <swiper-slide class="elementSwiperSlide benefit2">
                <div class="imageContainer">
                  <img
                    width="75"
                    src="../../../assets/images/icons8-homem-conversando-80.png"
                    alt=""
                  />
                </div>

                <div class="details">
                  <h4>Relacionamento com a marca</h4>

                  <p class="single-service-flip__text--full">
                    Construa um relacionamento sólido e duradouro com seus
                    clientes por meio do seu site. Através dele é possível
                    captar leads interessados na sua marca e fornecer novidades.
                  </p>
                </div>
              </swiper-slide>

              <swiper-slide class="elementSwiperSlide benefit3">
                <div class="imageContainer">
                  <img
                    src="../../../assets/images/icons8-gostar-64.png"
                    alt=""
                  />
                </div>

                <div class="details">
                  <h4>Visibilidade do negócio</h4>

                  <p class="single-service-flip__text--full">
                    Um website traz visibilidade para seu negócio, garantindo
                    presença online, acesso global e destaque frente à
                    concorrência. Estar na web é essencial para qualquer negócio
                    atual!
                  </p>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </section>

      <contact-form-component :mainTitle="'A Brainy Faz Seu Projeto'" />
    </main>
    <footer-component />
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper'

import {
  HeaderComponent,
  HeroComponent,
  ContactFormComponent,
  FooterComponent,
} from '../../03-organisms'

import { mapActions, mapState } from 'vuex'

export default {
  components: {
    Swiper,
    SwiperSlide,
    HeaderComponent,
    HeroComponent,
    ContactFormComponent,
    FooterComponent,
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
    ...mapState(['services']),
    service() {
      return this.$store.getters.getServiceByLink('website-development')
    },
  },
  methods: {
    ...mapActions(['populateStoreArr']),

    handleResize() {
      if (window.innerWidth > 1170) {
        this.slidesPerView = 3
      } else if (window.innerWidth >= 768) {
        this.slidesPerView = 2
      } else {
        this.slidesPerView = 1
      }
    },
  },
  created() {
    this.populateStoreArr()
  },
  mounted() {
    let callToAction = document.querySelector('.call-to-action')
    callToAction.style.display = 'none'

    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },
}
</script>

<style lang="scss" scoped>
.single-service-init {
  width: 100%;
  max-width: 1400px;
  height: auto;
  margin: 0 auto;
  padding: 64px 0 64px 0;
  background: #fff;

  .wrapper {
    width: calc(100% - 48px);
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      margin: 0 0 32px 0;
      font-size: $section-title-size;
      text-align: center;
    }

    .subtitle {
      line-height: $general-line-height;
    }

    .block-cards {
      a {
        width: 100%;
        height: auto;
        margin-top: 20px;
        padding: 48px 30px 64px 30px;
        display: block;
        text-decoration: none;
        transition: 0.2s;
        color: #fff;
        background: $color-branding;

        &.link3,
        &.link4 {
          color: $color-general-text;
          background: #d6ec43;

          h4 {
            color: $color-general-text;
          }

          &:hover {
            box-shadow: 0 12px 21px #b1c531;
          }
        }

        &:hover {
          box-shadow: 0 12px 21px $color-branding;
        }

        img {
          width: 48px;
          margin-bottom: 8px;
        }

        h4 {
          margin-bottom: 20px;
          font-size: $general-title-size;
          text-align: left;
          color: #fff;
        }

        p {
          line-height: $general-line-height;
        }
      }
    }
  }
}

.sub-services {
  width: 100%;
  max-width: 1400px;
  height: auto;
  margin: 0 auto;
  padding: 64px 0 64px 0;
  background: $color-branding;

  .wrapper {
    width: calc(100% - 48px);
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .firstBlock {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 64px;

      h3 {
        font-size: $section-title-size;
        text-align: center;
        margin: 0 0 20px 0;
        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
        color: #fff;

        span {
          padding: 0 5px;
          color: $color-general-text;
          text-shadow: none;
          background: $color-highlight;
        }
      }

      .subtitle {
        font-size: 1rem;
        color: #fff;
        text-align: center;
        display: none;
      }
    }

    .secondBlock {
      .cell {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 32px;

        .num {
          margin-right: 10px;
          font-size: 92px;
          font-weight: 700;
          text-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
          color: #fff;
        }

        .desc {
          p {
            line-height: $general-line-height;
            color: #fff;
          }
        }
      }
    }
  }
}

.benefits {
  width: 100%;
  max-width: 1400px;
  height: auto;
  margin: 0 auto;
  padding: 64px 0 64px 0;

  .wrapper {
    width: calc(100% - 48px);
    height: auto;
    margin: 0 auto;

    h3 {
      font-size: $section-title-size;
      text-align: center;
      margin: 0 0 64px 0;
      color: #000;
    }

    .cards {
      .elementSwiperSlide {
        width: 100%;
        height: auto;
        padding: 0 0 64px 0;
        background: $color-branding;

        .imageContainer {
          width: 100%;
          height: 120px;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            display: block;
            padding-top: 48px;
          }
        }

        .details {
          width: 100%;
          height: auto;
          padding: 0 25px;

          h4 {
            padding: 20px 0 15px 0;
            font-size: $general-title-size;
            text-align: center;
            color: $color-text-light;
          }

          p {
            padding-bottom: 20px;
            font-size: $font-size-base;
            line-height: $general-line-height;
            text-align: center;
            color: $color-text-light;
          }
        }

        &.benefit2 {
          background: $color-branding;
        }

        &.benefit3 {
          background: $color-branding;
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
}

@media (min-width: 600px) {
  // section
  .single-service-init {
    .wrapper {
      width: 500px;

      .block-cards {
        width: 100%;
      }
    }
  }

  // section
  .sub-services {
    .wrapper {
      width: 500px;
    }
  }

  // section
  .benefits {
    .wrapper {
      width: 500px;
    }
  }
}

@media (min-width: 768px) {
  // section
  .single-service-init {
    .wrapper {
      width: 90%;
      max-width: 660px;

      .block-cards {
        width: 100%;

        a {
          padding: 32px 0 48px 0;

          article {
            width: 70%;
            margin: 0 auto;
          }
        }
      }
    }
  }

  // section
  .sub-services {
    .wrapper {
      width: 90%;
      max-width: 600px;
    }
  }

  // section
  .benefits {
    .wrapper {
      width: 90%;
      max-width: 660px;
    }
  }
}

@media (min-width: 1171px) {
  // section
  .single-service-init {
    .wrapper {
      width: 100%;
      max-width: 1170px;
      margin: 0 auto;
      padding-left: 20px;
      padding-right: 20px;
      display: grid;
      grid-template-columns: 290px 1fr;
      justify-content: center;
      align-items: center;

      .block-desc {
        align-self: flex-start;
        padding-right: 20px;

        h3 {
          text-align: left;
          margin-bottom: 20px;
        }

        .subtitle {
          font-size: 1rem;
          line-height: $general-line-height;
          color: $color-general-text;
        }
      }

      .block-cards {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin-top: 0;

        .columns {
          margin-right: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          &:last-child {
            margin-right: 0;
          }

          a {
            padding: 32px 32px;
            position: relative;
            transition: 0.2s;

            &:hover {
              transform: translateY(-10px);
            }

            article {
              width: 100%;
              margin: 0;
            }
          }
        }
      }
    }
  }

  // section
  .sub-services {
    .wrapper {
      width: 100%;
      max-width: 1170px;
      margin: 0 auto;
      padding-left: 20px;
      padding-right: 20px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      align-items: center;

      .firstBlock {
        padding-right: 50px;

        h3 {
          margin: 0 0 10px 0;
          padding-right: 50px;
          font-size: 40px;
          text-align: left;
          text-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
          color: #fff;
        }

        .subtitle {
          padding-right: 50px;
          font-size: 1rem;
          color: #fff;
          text-align: left;
        }
      }

      .secondBlock {
        .cell {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 0;
          padding-right: 50px;

          .num {
            margin-right: 10px;
            font-size: 130px;
            font-weight: 700;
            text-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
            color: #fff;
          }

          .desc {
            p {
              line-height: $general-line-height;
              color: #fff;
            }
          }
        }
      }
    }
  }

  // section
  .benefits {
    .wrapper {
      width: 100%;
      max-width: 1170px;
      margin: 0 auto;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}
</style>

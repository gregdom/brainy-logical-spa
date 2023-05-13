<template>
  <div>
    <header-component />
    <hero-component
      titleHero="Criamos Projetos Para A Web"
      :subTitleHero="service.shortDescription"
    />
    <main>
      <section class="single-service-init">
        <div class="wrapper">
          <div class="block-desc">
            <h3>Serviço de Criação Web</h3>
            <span class="subtitle">
              HTML5/CSS3 - PHP (Laravel, CodeIgniter, Symfony, CakePHP, Yii) -
              JavaScript (Angular.js, React.js, Vue.js, Node.js, Backbone.js) -
              Python (Django)
            </span>
          </div>

          <div class="block-cards">
            <div class="columns">
              <a href="#">
                <article>
                  <img
                    src="../../../assets/images/web.png"
                    alt="Imagem ilustrativa serviço web"
                  />
                  <h4 class="card-title">Site Empresarial</h4>
                  <p class="card-descr">
                    Find out how to create a high-quality corporate website
                  </p>
                </article>
              </a>
            </div>

            <div class="columns">
              <a href="#">
                <article>
                  <img
                    src="../../../assets/images/web.png"
                    alt="Imagem ilustrativa serviço web"
                  />
                  <h4 class="card-title">Site para Startup</h4>
                  <p class="card-descr">
                    Find out how to create a high-quality corporate website
                  </p>
                </article>
              </a>

              <a href="#">
                <article>
                  <img
                    src="../../../assets/images/web.png"
                    alt="Imagem ilustrativa serviço web"
                  />
                  <h4 class="card-title">Landing Pages</h4>
                  <p class="card-descr">
                    Find out how to create a high-quality corporate website
                  </p>
                </article>
              </a>
            </div>

            <div class="columns">
              <a href="#">
                <article>
                  <img
                    src="../../../assets/images/web.png"
                    alt="Imagem ilustrativa serviço web"
                  />
                  <h4 class="card-title">Extensões Web</h4>
                  <p class="card-descr">
                    Find out how to create a high-quality corporate website
                  </p>
                </article>
              </a>

              <!-- <a href="#">
                <article>
                  <img
                    src="../../../assets/images/web.png"
                    alt="Imagem ilustrativa serviço web"
                  />
                  <h4 class="card-title">Site para Afiliados</h4>
                  <p class="card-descr">
                    Find out how to create a high-quality corporate website
                  </p>
                </article>
              </a> -->
            </div>
          </div>
        </div>
      </section>

      <section class="sub-services">
        <div class="wrapper">
          <div class="firstBlock">
            <h3>What Are F5 Studio's Web Development Services?</h3>

            <span class="subtitle"
              >What is included in web development services?</span
            >
          </div>

          <div class="secondBlock">
            <div class="cell">
              <div class="num">1</div>
              <div class="desc">
                <p>
                  Professional website development services. Custom website
                  development that is responsive to your needs. Our team creates
                  user-friendly, mobile-friendly, SEO-friendly websites that
                  maximize revenue and help grow your business.
                </p>
              </div>
            </div>

            <div class="cell">
              <div class="num">2</div>
              <div class="desc">
                <p>
                  Web application development services. F5 Studio builds web
                  apps that solve manufacturing, healthcare, retail,
                  telecommunications, logistics, professional services, and
                  education business challenges.
                </p>
              </div>
            </div>

            <div class="cell">
              <div class="num">3</div>
              <div class="desc">
                <p>
                  WordPress development services. WordPress is an excellent
                  platform for building ROI-driven business websites that are
                  SEO-friendly and deliver control and security. F5 Studio’s
                  expertise is in providing cost-effective WordPress development
                  services for business needs.
                </p>
              </div>
            </div>

            <div class="cell">
              <div class="num">4</div>
              <div class="desc">
                <p>
                  Ecommerce development services. F5 Studio brings your
                  e-commerce business to life with professional UI/UX design, a
                  responsive online store, and custom functionality. We provide
                  e-commerce site development, site migration, and integrations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="benefits">
        <div class="wrapper">
          <h3>Your Benefits. Our Key Expertise</h3>

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
              <swiper-slide class="elementSwiperSlide">
                <div class="imageContainer">
                  <img src="../../../assets/images/web.png" alt="" />
                </div>

                <div class="details">
                  <h4>Optimize a marketing budget</h4>

                  <p class="single-service-flip__text--full">
                    The Internet is still affordable to promote your business
                    compared to other marketing channels. F5 Studio’s approaches
                    allow you to achieve your business goals cost-effectively.
                  </p>
                </div>
              </swiper-slide>

              <swiper-slide class="elementSwiperSlide">
                <div class="imageContainer">
                  <img src="../../../assets/images/web.png" alt="" />
                </div>

                <div class="details">
                  <h4>Optimize a marketing budget</h4>

                  <p class="single-service-flip__text--full">
                    The Internet is still affordable to promote your business
                    compared to other marketing channels. F5 Studio’s approaches
                    allow you to achieve your business goals cost-effectively.
                  </p>
                </div>
              </swiper-slide>

              <swiper-slide class="elementSwiperSlide">
                <div class="imageContainer">
                  <img src="../../../assets/images/web.png" alt="" />
                </div>

                <div class="details">
                  <h4>Optimize a marketing budget</h4>

                  <p class="single-service-flip__text--full">
                    The Internet is still affordable to promote your business
                    compared to other marketing channels. F5 Studio’s approaches
                    allow you to achieve your business goals cost-effectively.
                  </p>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </section>
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
  FooterComponent,
} from '../../03-organisms'

export default {
  components: {
    Swiper,
    SwiperSlide,
    HeaderComponent,
    HeroComponent,
    FooterComponent,
  },
  props: {
    serviceName: {
      type: String,
      required: true,
    },
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
    service() {
      return this.$store.getters.getServiceByLink(this.serviceName)
    },
  },
  methods: {
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
      font-size: $section-title-size;
      text-align: center;
      margin: 0 0 32px 0;
      // text-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
      // text-transform: uppercase;
      // margin-bottom: 20px;
    }

    .block-cards {
      a {
        width: 100%;
        height: auto;
        margin-top: 20px;
        padding: 48px 30px 64px 30px;
        display: block;
        text-decoration: none;
        color: #fff;
        // box-shadow: 0 12px 21px $color-branding;
        background: $color-branding;
        // background-image: radial-gradient(
        //   circle 195px at center,
        //   #8b52fd 0,
        //   #8b52fd 24%,
        //   #8b52fd 32%,
        //   #7939f8 91%,
        //   #712cf9 100%
        // );

        // &:first-child {
        //   margin-top: 0;
        // }

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
        margin: 0 0 10px 0;
        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
        color: #fff;
        // text-transform: uppercase;
        // margin-bottom: 20px;
      }

      .subtitle {
        font-size: 1rem;
        color: #fff;
        text-align: center;
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
  // background: $color-branding;

  .wrapper {
    width: calc(100% - 48px);
    height: auto;
    margin: 0 auto;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;

    h3 {
      font-size: $section-title-size;
      text-align: center;
      margin: 0 0 64px 0;
      // text-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
      color: #000;
      // text-transform: uppercase;
      // margin-bottom: 20px;
    }

    .cards {
      .elementSwiperSlide {
        width: 100%;
        // max-width: auto;
        height: auto;
        padding: 0 0 64px 0;
        // border: 1px solid rgba(0, 0, 0, 0.1);
        // border-radius: 10px;
        background: $color-branding;

        .imageContainer {
          width: 100%;
          height: auto;
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
          padding: 0 20px;

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
            // font-style: italic;
            text-align: center;
            color: $color-text-light;
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
        display: flex;
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
            transition: transform 0.3s ease;

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
          // text-transform: uppercase;
          // margin-bottom: 20px;
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

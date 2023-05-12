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

              <a href="#">
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
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="sub-services">
        <div class="wrapper">
          <div class="firstBlock">
            <h3>What are F5 Studio's web development services?</h3>

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
    </main>
    <footer-component />
  </div>
</template>

<script>
// import { CardService } from '../../02-molecules'
import {
  HeaderComponent,
  HeroComponent,
  FooterComponent,
} from '../../03-organisms'

export default {
  components: { HeaderComponent, HeroComponent, FooterComponent },
  props: {
    serviceName: {
      type: String,
      required: true,
    },
  },
  computed: {
    service() {
      return this.$store.getters.getServiceByLink(this.serviceName)
    },
  },
  mounted() {
    let callToAction = document.querySelector('.call-to-action')
    callToAction.style.display = 'none'
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
      // text-transform: uppercase;
      // margin-bottom: 20px;
    }

    .block-cards {
      a {
        width: 100%;
        height: auto;
        margin-top: 20px;
        padding: 30px 30px 64px 30px;
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
</style>

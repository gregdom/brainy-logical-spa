<template>
  <div>
    <header-component />
    <hero-component
      :titleHero="service ? service.title : ''"
      :subTitleHero="service ? service.description_short : ''"
    />
    <main>
      <section class="whatIs">
        <div class="wrapper">
          <h3>O Que é {{ service ? service.title : '' }}</h3>

          <div class="blocks">
            <div
              class="what-is-col"
              v-html="service ? service.description_long : ''"
            ></div>
          </div>
        </div>
      </section>

      <section class="work-process">
        <div class="wrapper">
          <div class="firstBlock">
            <h3>
              Como é nosso processo de criação de
              {{ service ? service.title : '' }}
            </h3>
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
          </div>
        </div>
      </section>

      <section class="fixed-price">
        <div class="wrapper">
          <h3>Veja os Pacotes de Preços</h3>

          <div class="blocks">
            <div class="fixed-price-col">
              <div class="top">
                <div class="imageContainer">
                  <img src="../../../assets/images/web.png" alt="" />
                </div>
                <h4>Pacote Starter</h4>
              </div>

              <div class="price"><span>R$</span>599,00</div>

              <div class="details">
                <h5>O Que Está Incluso</h5>

                <ul>
                  <li>
                    <span class="material-symbols-outlined check">
                      check_circle
                    </span>
                    Acima de 3 páginas
                  </li>
                  <li>
                    <span class="material-symbols-outlined block"> block </span>
                    Blog
                  </li>
                </ul>
              </div>

              <button-call-to-action buttonText="Começar Projeto" />
            </div>

            <div class="fixed-price-col corporate">
              <div class="top">
                <div class="imageContainer"><img src="" alt="" /></div>
                <h4>Pacote Empresarial</h4>
              </div>

              <div class="price"><span>R$</span>997,00</div>

              <div class="details">
                <h5>O Que Está Incluso</h5>

                <ul>
                  <li>
                    <span class="material-symbols-outlined check">
                      check_circle
                    </span>
                    Acima de 5 páginas
                  </li>
                  <li>
                    <span class="material-symbols-outlined check">
                      check_circle
                    </span>
                    Blog
                  </li>
                </ul>
              </div>

              <button-call-to-action buttonText="Começar Projeto" />
            </div>
          </div>
        </div>
      </section>

      <contact-form-component :mainTitle="'A Brainy Faz Seu Projeto'" />
    </main>
    <footer-component />
  </div>
</template>

<script>
import { ButtonCallToAction } from '../../01-atoms'
import {
  HeaderComponent,
  HeroComponent,
  ContactFormComponent,
  FooterComponent,
} from '../../03-organisms'

import { mapActions, mapState } from 'vuex'

export default {
  components: {
    ButtonCallToAction,
    HeaderComponent,
    HeroComponent,
    ContactFormComponent,
    FooterComponent,
  },
  data() {
    return {
      serviceName: this.$route.path.split('/services/')[1],
    }
  },
  computed: {
    ...mapState(['services']),
    service() {
      return this.$store.getters.getServiceByLink(this.serviceName)
    },
  },
  methods: {
    ...mapActions(['populateStoreArr']),
  },
  watch: {
    $route(to) {
      const serviceName = to.path.split('/services/')[1]
      this.serviceName = serviceName
    },
  },
  created() {
    this.populateStoreArr()
  },
  mounted() {
    let callToAction = document.querySelector('.hero .call-to-action')
    callToAction.style.display = 'none'

    let c2 = document.querySelectorAll('.fixed-price .call-to-action')
    c2.forEach((element) => {
      element.style.display = 'flex'
      let spans = element.querySelectorAll('span')
      spans.forEach((span) => {
        span.style.display = 'none'
      })
    })
  },
}
</script>

<style lang="scss">
.call-to-action {
  display: none;
}

section.whatIs {
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
      margin-bottom: 20px;
    }

    .blocks {
      .what-is-col {
        margin-bottom: 20px;

        p {
          margin-bottom: 20px;
          font-size: $font-size-base;
          line-height: $general-line-height;
          color: $color-general-text;

          &:last-child {
            margin-bottom: 0;
          }
        }

        ul {
          list-style: none;

          li {
            margin-bottom: 20px;
            margin-left: 20px;
            line-height: $general-line-height;

            &:last-child {
              margin-bottom: 0;
            }

            &::before {
              content: '\2022';
              width: 1em;
              margin-left: -1em;
              display: inline-block;
              font-weight: bold;
              color: $color-branding;
            }
          }
        }
      }
    }
  }
}

section.work-process {
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
        margin: 0;
        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
        color: #fff;

        span {
          padding: 0 5px;
          margin-right: 5px;
          color: $color-general-text;
          text-shadow: none;
          background: $color-highlight;
        }
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

section.fixed-price {
  width: 100%;
  max-width: 1400px;
  height: auto;
  margin: 0 auto;
  padding: 64px 0 64px 0;
  background: #f6f9ff;

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
      margin-bottom: 54px;
    }

    .blocks {
      width: 100%;
      display: flex;
      flex-direction: column;

      .fixed-price-col {
        width: 100%;
        height: auto;
        margin-bottom: 20px;
        padding: 20px 20px;
        border-radius: 10px;
        color: $color-general-text;
        box-shadow: 0 12px 21px #c4c4c4;
        background: #fff;

        .top {
          padding: 0 0 5px 0;

          img {
            display: none;
            margin: 0 auto 20px auto;
          }

          h4 {
            font-size: $general-title-size;
            text-align: center;
          }
        }

        .price {
          margin-bottom: 20px;
          font-size: 3rem;
          font-weight: 600;
          text-align: center;

          span {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 1.7rem;
            font-weight: 600;
          }
        }

        .details {
          width: 100%;

          h5 {
            font-size: 1rem;
            text-align: left;
            display: none;
          }

          span {
            opacity: 0.7;

            &.check {
              color: green;
            }

            &.block {
              color: red;
            }
          }

          ul {
            li {
              display: flex;
              padding: 16px 8px;
              border-top: 1px solid #eaebee;

              &:last-child {
                margin-bottom: 20px;
                border-bottom: 1px solid #eaebee;
              }

              span {
                margin-right: 8px;
              }
            }
          }

          .call-to-action {
            display: flex;
          }
        }

        p {
          margin-bottom: 20px;
          font-size: $font-size-base;
          line-height: $general-line-height;
          color: $color-general-text;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}

@media (min-width: 600px) {
  section.whatIs {
    .wrapper {
      width: 500px;
    }
  }

  section.work-process {
    .wrapper {
      width: 500px;
    }
  }

  section.fixed-price {
    .wrapper {
      width: 90%;
      max-width: 500px;
    }
  }
}

@media (min-width: 768px) {
  section.whatIs {
    .wrapper {
      width: 90%;
      max-width: 660px;
    }
  }

  section.work-process {
    .wrapper {
      width: 90%;
      max-width: 660px;
    }
  }

  section.fixed-price {
    .wrapper {
      width: 90%;
      max-width: 768px;

      .blocks {
        width: 100%;
        display: flex;
        flex-direction: row;

        & > * {
          margin-right: 20px;
        }

        & > *:last-child {
          margin-right: 0;
        }

        .fixed-price-col {
          width: 100%;
          height: auto;
          margin-bottom: 20px;
          padding: 32px 20px;
          border-radius: 10px;
          color: $color-general-text;
          box-shadow: 0 12px 21px #c4c4c4;
          background: #fff;
        }
      }
    }
  }
}

@media (min-width: 1171px) {
  section.whatIs {
    .wrapper {
      width: 100%;
      max-width: 960px;
      margin: 0 auto;

      .blocks {
        .what-is-col {
          column-count: 2;

          p {
            padding-right: 20px;
          }
        }
      }
    }
  }

  section.work-process {
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
}
</style>

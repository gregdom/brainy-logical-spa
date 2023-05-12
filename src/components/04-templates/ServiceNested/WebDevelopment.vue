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
            <h3>Serviço de Desenvolvimento Web</h3>
          </div>

          <div class="block-cards">
            <div class="columns">
              <a href="#">
                <article>
                  <img
                    src="../../../assets/images/web.png"
                    alt="Imagem ilustrativa serviço web"
                  />
                  <h3 class="card-title">Corporate website</h3>
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
                  <h3 class="card-title">Corporate website</h3>
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
                  <h3 class="card-title">Corporate website</h3>
                  <p class="card-descr">
                    Find out how to create a high-quality corporate website
                  </p>
                </article>
              </a>
            </div>

            <div class="columns">
              <card-service
                icon="web.png"
                title="Site Empresarial"
                shortDescription="Um site"
                link="teste"
              />
              <card-service
                icon="web.png"
                title="Site Empresarial"
                shortDescription="Um site"
                link="teste"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer-component />
  </div>
</template>

<script>
import { CardService } from '../../02-molecules'
import {
  HeaderComponent,
  HeroComponent,
  FooterComponent,
} from '../../03-organisms'

export default {
  components: { CardService, HeaderComponent, HeroComponent, FooterComponent },
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
  .wrapper {
    .cards {
      .card-service {
        background: $color-branding;

        .iconContainer {
          all: unset;
        }
      }
    }
  }
}
</style>

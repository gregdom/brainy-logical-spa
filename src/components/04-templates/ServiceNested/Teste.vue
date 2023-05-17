<template>
  <div>
    <header-component />
    <hero-component
      :titleHero="service.title"
      :subTitleHero="service.shortDescription"
    />
    <main>
      <!-- <h1>{{ service.title }}</h1>
      <p>{{ service.longText }}</p> -->

      <section class="whatIs">
        <div class="wrapper">
          <h3>O Que é Um Site Corporativo</h3>

          <div class="blocks">
            <div class="what-is-col">
              <p>
                A corporate website represents the company it was built for. It
                conveys the company’s image and concept to the world and,
                therefore, must be convenient for all segments of the audience:
                clients, shareholders, employees, investors, suppliers, and
                local communities. That is why developing great corporate
                websites requires extensive experience and skills. In short, the
                corporate website is like a company’s personal assistant or
                business development executive that a company owner hires to
                work 24/7 without days off. Design, functionality, and content
                should be thoroughly thought out.
              </p>
            </div>

            <div class="what-is-col">
              <p>
                Corporate website development is a challenging task. Several
                basic principles help to build a successful business site:
              </p>

              <ul>
                <li>Starting from a marketing audit, depth UX research</li>
                <li>Creating clear site structure, easy to navigate</li>
                <li>Creating professional UI/UX design for a website</li>
                <li>Using elements of the corporate Identity</li>
                <li>A site must be safe, reliable, stable, and scalable</li>
                <li>Providing accurate information to visitors</li>
                <li>
                  A site should inform, engage, and convert the right audience
                </li>
                <li>SEO-friendly</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="work-process">
        <div class="wrapper">
          <div class="firstBlock">
            <h3>Como é nosso processo de criação de um site corporativo?</h3>
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

      <section class="fixed-price">
        <div class="wrapper">
          <h3>Veja os Pacotes de Preços</h3>

          <div class="blocks">
            <div class="fixed-price-col">
              <div class="top">
                <div class="imageContainer"><img src="" alt="" /></div>
                <h4>Pacote Starter</h4>
              </div>

              <div class="price"><span>R$</span>599,00</div>

              <div class="details">
                <h5>O Que Está Incluso</h5>

                <ul>
                  <li>Acima de 3 páginas</li>
                  <li>Blog</li>
                </ul>
              </div>
            </div>

            <div class="fixed-price-col">
              <div class="top">
                <div class="imageContainer"><img src="" alt="" /></div>
                <h4>Pacote Empresarial</h4>
              </div>

              <div class="price"><span>R$</span>997,00</div>

              <div class="details">
                <h5>O Que Está Incluso</h5>

                <ul>
                  <li>Acima de 5 páginas</li>
                  <li>Blog</li>
                </ul>
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
.call-to-action {
  display: none;
}
</style>

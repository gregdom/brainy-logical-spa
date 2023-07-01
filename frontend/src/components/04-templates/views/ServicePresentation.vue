<template>
  <div>
    <hero-service-presentation :heroContent="heroContent" />
    <what-is-service-presentation />
    <divider-horizontal />
    <testimonial-component />
  </div>
</template>

<script>
import { DividerHorizontal } from '../../01-atoms'
import {
  HeroServicePresentation,
  WhatIsServicePresentation,
  TestimonialComponent,
} from '../../03-organisms'

export default {
  name: 'ServicePresentation',
  components: {
    HeroServicePresentation,
    WhatIsServicePresentation,
    TestimonialComponent,
    DividerHorizontal,
  },
  // props: {
  //   titleHero: {
  //     type: String,
  //     required: true,
  //   },
  //   descHero: {
  //     type: String,
  //     required: true,
  //   },
  // },
  computed: {
    heroContent() {
      const routePath = this.$route.path
      if (routePath === '/services/browser-extension') {
        return {
          titleH: 'Desenvolvemos Extensões para Chrome e Firefox',
          subtitleH: 'Extensão',
          descriptionH: `Personalize sua experiência de navegação com Extensões para Chrome e
          Firefox, tornando seu dia online mais produtivo.`,
          pathH: 'extension-service.svg',
        }
      } else if (routePath === '/services/business-website') {
        return {
          titleH: 'Desenvolvemos sites exclusivos e funcionais',
          subtitleH: 'Website',
          descriptionH: `Personalize sua experiência de navegação com Extensões para Chrome e
          Firefox, tornando seu dia online mais produtivo.`,
          pathH: 'business-service.svg',
        }
      } else if (routePath === '/services/landing-page-website') {
        return {
          titleH: 'Criamos Landing Pages que geram resultados',
          subtitleH: 'Landing Page',
          descriptionH: `Personalize sua experiência de navegação com Extensões para Chrome e
          Firefox, tornando seu dia online mais produtivo.`,
          pathH: 'landing-page-service.svg',
        }
      }

      return {}
    },
  },

  methods: {},
}
</script>

<style lang="scss">
@media screen and (min-width: 992px) {
  .home-testimonials {
    padding-top: 130px;
    padding-bottom: 160px;
  }
}
</style>

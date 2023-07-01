<template>
  <div>
    <transition name="fade" mode="out-in">
      <div v-if="service" :key="service">
        <hero-service-presentation :heroContent="heroContent" />
        <what-is-service-presentation />
        <divider-horizontal />
        <testimonial-component />
      </div>
      <div v-else :key="defaultKey">
        <services-component
          titleServices="Desenvolvimento sob medida para atender você"
          routeName="services"
        />
        <divider-horizontal />
        <testimonial-component />
      </div>
    </transition>
  </div>
</template>

<script>
import { DividerHorizontal } from '../../01-atoms'
import {
  HeroServicePresentation,
  WhatIsServicePresentation,
  ServicesComponent,
  TestimonialComponent,
} from '../../03-organisms'

export default {
  name: 'ServicesView',
  components: {
    HeroServicePresentation,
    WhatIsServicePresentation,
    ServicesComponent,
    TestimonialComponent,
    DividerHorizontal,
  },

  props: ['service'],

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

    defaultKey() {
      return 'default'
    },
  },
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

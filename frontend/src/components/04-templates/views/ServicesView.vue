<template>
  <div>
    <transition name="fade" mode="out-in">
      <div v-if="service && isValidService(service)" :key="service">
        <hero-service-presentation :heroContent="heroContent" />
        <what-is-service-presentation :currentRoute="currentRoute" />
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

// Vue Router
import { useRouter } from 'vue-router'

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

  created() {
    if (this.service && !this.isValidService(this.service)) {
      const router = useRouter()
      router.push('/notfound')
    }
  },

  computed: {
    heroContent() {
      const routePath = this.$route.path
      if (routePath === '/services/browser-extension') {
        return {
          title: 'Desenvolvemos Extensões para Chrome e Firefox',
          subtitle: 'Extensão',
          description: `Personalize sua experiência de navegação com Extensões para Chrome e
          Firefox, tornando seu dia online mais produtivo.`,
          path: 'extension-service.svg',
        }
      } else if (routePath === '/services/business-website') {
        return {
          title: 'Desenvolvemos sites exclusivos e funcionais',
          subtitle: 'Website',
          description: `Design atraente e responsivo para seu site, que engaja e encanta seus clientes. Crie uma presença online forte.`,
          path: 'business-service.svg',
        }
      } else if (routePath === '/services/landing-page-website') {
        return {
          title: 'Criamos Landing Pages que geram resultados',
          subtitle: 'Landing Page',
          description: `Aumente suas conversões com uma Landing Page otimizada, para gerar mais leads e vendas para seu negócio.`,
          path: 'landing-page-service.svg',
        }
      }

      return {}
    },

    currentRoute() {
      const routePath = this.$route.path
      return routePath
    },

    defaultKey() {
      return 'default'
    },
  },

  methods: {
    isValidService(service) {
      return (
        service === 'browser-extension' ||
        service === 'business-website' ||
        service === 'landing-page-website'
      )
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

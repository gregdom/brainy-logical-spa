<template>
  <div>
    <header-component />
    <hero-component
      class="teste-hero"
      titleHero="Desenvolvemos Seu Projeto Web Sob Medida"
      subTitleHero="Soluções personalizadas para atender às suas necessidades, com uma equipe dedicada a oferecer serviços de desenvolvimento e programação de websites de qualidade."
    />

    <main>
      <div class="services">
        <div
          class="hexagon-container"
          v-for="service in services"
          :key="service.id"
        >
          <h2>{{ service.title }}</h2>
          <p>{{ service.description }}</p>
          <router-link :to="`/services/${service.link}`">Ver mais</router-link>
        </div>
      </div>
    </main>

    <footer-component />
  </div>
</template>

<script>
import {
  HeaderComponent,
  HeroComponent,
  FooterComponent,
} from '../03-organisms'
import { mapState } from 'vuex'

export default {
  components: { HeaderComponent, HeroComponent, FooterComponent },
  computed: {
    ...mapState({
      services: (state) => state.services,
    }),
  },
  mounted() {
    let callToAction = document.querySelector('.call-to-action')
    callToAction.style.display = 'none'
  },
}
</script>

<style lang="scss" scoped></style>

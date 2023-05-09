<template>
  <div>
    <header-component />
    <hero-component
      titleHero="Serviços"
      subTitleHero="Veja os serviços que oferecemos"
    />

    <div class="services">
      <div v-for="service in services" :key="service.id">
        <h2>{{ service.title }}</h2>
        <p>{{ service.description }}</p>
        <router-link :to="`/services/${service.link}`">Ver mais</router-link>
      </div>
    </div>

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
}
</script>

<style lang="scss" scoped></style>

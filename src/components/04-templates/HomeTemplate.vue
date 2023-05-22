<template>
  <div>
    <header-component />
    <main>
      <hero-component
        titleHero="Soluções Para Impulsionar Sua Presença Online"
        subTitleHero="Nossa equipe está pronta para criar soluções personalizadas e eficientes
        que se adaptam às necessidades do seu negócio."
      />
      <services-component />
      <about-component :aboutProp="about" />
      <projects-component />
      <testimonial-component />
      <contact-form-component mainTitle="A Brainy Faz Seu Projeto" />
    </main>
    <footer-component />
  </div>
</template>

<script>
import {
  HeaderComponent,
  HeroComponent,
  ServicesComponent,
  AboutComponent,
  ProjectsComponent,
  TestimonialComponent,
  ContactFormComponent,
  FooterComponent,
} from '../03-organisms'

import { mapState, mapActions } from 'vuex'

export default {
  components: {
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    AboutComponent,
    ProjectsComponent,
    TestimonialComponent,
    ContactFormComponent,
    FooterComponent,
  },
  computed: {
    ...mapState(['about']),
  },
  methods: {
    ...mapActions(['populateStoreArr']),
  },
  created() {
    this.populateStoreArr()
  },
}
</script>

<style lang="scss" scoped></style>

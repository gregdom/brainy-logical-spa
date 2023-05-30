<template>
  <div>
    <header-component />
    <hero-component
      titleHero="Seu Projeto Web Sob Medida"
      subTitleHero="Soluções personalizadas para atender às suas necessidades, com uma equipe dedicada a oferecer serviços de desenvolvimento e programação de websites de qualidade."
    />

    <main>
      <services-component />
      <gallery-component />
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
  GalleryComponent,
  TestimonialComponent,
  ContactFormComponent,
  FooterComponent,
} from '../03-organisms'

import { mapState } from 'vuex'

export default {
  components: {
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    GalleryComponent,
    TestimonialComponent,
    ContactFormComponent,
    FooterComponent,
  },
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

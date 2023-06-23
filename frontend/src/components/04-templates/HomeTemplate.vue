<template>
  <div class="main-container">
    <header-component />
    <divider-horizontal />
    <main>
      <hero-component
        titleHero="We are a top-notch development agency."
        descHero="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus ante velit nunc morbi pretium. Ut nullam dolor, pulvinar proin viverra ullamcorper ac, eget."
      />
      <services-component
        titleServices="We are development experts on all technologies & platforms."
      />
      <about-component />
      <projects-component />
      <divider-horizontal />
      <testimonial-component />
      <!-- <contact-form-component mainTitle="A Brainy Faz Seu Projeto" /> -->
    </main>
    <footer-component />
  </div>
</template>

<script>
import { DividerHorizontal } from '../01-atoms'
import {
  HeaderComponent,
  HeroComponent,
  ServicesComponent,
  AboutComponent,
  ProjectsComponent,
  TestimonialComponent,
  // ContactFormComponent,
  FooterComponent,
} from '../03-organisms'

export default {
  components: {
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    AboutComponent,
    ProjectsComponent,
    TestimonialComponent,
    DividerHorizontal,
    // ContactFormComponent,
    FooterComponent,
  },
}
</script>

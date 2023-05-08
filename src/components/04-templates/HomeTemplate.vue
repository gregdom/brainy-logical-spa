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
      <about-component />
      <projects-component />
      <testimonial-component />
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
    FooterComponent,
  },
}
</script>

<style lang="scss" scoped></style>

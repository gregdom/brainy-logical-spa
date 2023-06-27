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
        routeName="home-services"
      />
      <about-component />
      <projects-component />
      <divider-horizontal />
      <testimonial-component />
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
    FooterComponent,
  },
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 992px) {
  .home-projects {
    padding-top: 160px;
    padding-bottom: 130px;
  }

  .home-testimonials {
    padding-top: 130px;
    padding-bottom: 160px;
  }
}
</style>

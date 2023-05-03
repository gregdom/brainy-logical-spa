<template>
  <div>
    <header-component />
    <main>
      <hero-component />
      <services-component />
      <about-component />
      <projects-component />
      <testimonial-component />
    </main>
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
} from '../03-organisms'

export default {
  components: {
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    AboutComponent,
    ProjectsComponent,
    TestimonialComponent,
  },
}
</script>

<style lang="scss" scoped></style>

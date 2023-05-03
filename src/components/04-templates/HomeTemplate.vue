<template>
  <div>
    <header-component />
    <main>
      <hero-component />
      <services-component />
      <about-component />
      <projects-component />
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
} from '../03-organisms'

export default {
  components: {
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    AboutComponent,
    ProjectsComponent,
  },
}
</script>

<style lang="scss" scoped></style>

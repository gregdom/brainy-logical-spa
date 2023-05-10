<template>
  <div>
    <header-component />
    <hero-component
      titleHero="Projetos Que Trabalhamos Recentemente"
      subTitleHero="Veja alguns projetos incríveis que amamos fazer."
    />
    <main>
      <projects-component />
    </main>
    <footer-component />
  </div>
</template>

<script>
import {
  HeaderComponent,
  HeroComponent,
  ProjectsComponent,
  FooterComponent,
} from '../03-organisms'

export default {
  components: {
    HeaderComponent,
    HeroComponent,
    ProjectsComponent,
    FooterComponent,
  },
  mounted() {
    let callToAction = document.querySelector('.call-to-action')
    callToAction.style.display = 'none'
  },
}
</script>

<style lang="scss" scoped>
.projects {
  padding-bottom: 132px;
}

.footer {
  margin-top: 0;
}
</style>

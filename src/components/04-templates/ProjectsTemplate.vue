<template>
  <div>
    <header-component />
    <hero-component
      titleHero="Projetos Que Trabalhamos Recentemente"
      subTitleHero="Veja alguns projetos incríveis que amamos fazer."
    />
    <main>
      <projects-component />
      <contact-form-component :mainTitle="'A Brainy Faz Seu Projeto'" />
    </main>
    <footer-component />
  </div>
</template>

<script>
import {
  HeaderComponent,
  HeroComponent,
  ProjectsComponent,
  ContactFormComponent,
  FooterComponent,
} from '../03-organisms'

export default {
  components: {
    HeaderComponent,
    HeroComponent,
    ProjectsComponent,
    ContactFormComponent,
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
  padding-bottom: 100px;
}

.footer {
  margin-top: 0;
}
</style>

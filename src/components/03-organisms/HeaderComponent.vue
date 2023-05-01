<template>
  <header>
    <span class="material-symbols-outlined"> menu </span>
    <logo imageName="logo-full-black-brainy-logical.png" />
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/services">Serviços</router-link>
      <router-link to="/about">Sobre</router-link>
      <router-link to="/projects">Projetos</router-link>
      <router-link to="/contact">Contato</router-link>
    </nav>
  </header>
</template>

<script>
import { Logo } from '../01-atoms'

export default {
  components: { Logo },
}
</script>

<style lang="scss" scoped></style>

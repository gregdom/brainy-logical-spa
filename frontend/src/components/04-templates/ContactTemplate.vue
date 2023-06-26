<template>
  <div>
    <header-component />
    <main>
      <hero-contact />
      <contact-form-component mainTitle="Envie sua mensagem" />
    </main>
    <footer-component />
  </div>
</template>

<script>
import {
  HeaderComponent,
  HeroContact,
  ContactFormComponent,
  FooterComponent,
} from '../03-organisms'

export default {
  name: 'ContactTemplate',
  components: {
    HeaderComponent,
    HeroContact,
    ContactFormComponent,
    FooterComponent,
  },
  mounted() {},
}
</script>

<style lang="scss" scoped></style>

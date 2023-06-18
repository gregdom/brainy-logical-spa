<template>
  <div>
    <header-component />
    <hero-component
      titleHero="Fale Conosco"
      subTitleHero="Se precisa de um projeto ou quer tirar dúvidas sobre nossos serviços, basta entrar em contato pelo formulário abaixo!"
    />

    <main>
      <contact-form-component mainTitle="Envie sua mensagem" />
    </main>

    <footer-component />
  </div>
</template>

<script>
import {
  HeaderComponent,
  HeroComponent,
  ContactFormComponent,
  FooterComponent,
} from '../03-organisms'

export default {
  components: {
    HeaderComponent,
    HeroComponent,
    ContactFormComponent,
    FooterComponent,
  },
  mounted() {
    let callToAction = document.querySelector('.call-to-action')
    callToAction.style.display = 'none'
  },
}
</script>

<style lang="scss" scoped></style>

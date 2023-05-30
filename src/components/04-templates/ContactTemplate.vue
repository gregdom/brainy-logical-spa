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
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      companyName: '',
      companySite: '',
      projectType: 'default',
      projectDetails: '',
    }
  },
  methods: {
    submitForm() {
      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        companyName: this.companyName,
        companySite: this.companySite,
        projectType: this.projectType,
        projectDetails: this.projectDetails,
      }

      console.log(formData)
      this.resetForm()
    },

    resetForm() {
      this.firstName = ''
      this.lastName = ''
      this.email = ''
      this.companyName = ''
      this.companySite = ''
      this.projectType = ''
      this.projectDetails = ''
    },
  },
  mounted() {
    let callToAction = document.querySelector('.call-to-action')
    callToAction.style.display = 'none'
  },
}
</script>

<style lang="scss" scoped></style>

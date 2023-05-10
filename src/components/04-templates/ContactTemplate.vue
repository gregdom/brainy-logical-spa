<template>
  <div>
    <header-component />
    <hero-component
      titleHero="Fale Conosco"
      subTitleHero="Se precisa de um projeto ou quer tirar dúvidas sobre nossos serviços, basta entrar em contato pelo formulário abaixo!"
    />

    <main>
      <section>
        <div class="wrapper">
          <form @submit.prevent="submitForm">
            <div>
              <label for="first-name">Nome:</label>
              <input id="first-name" type="text" v-model="firstName" />
            </div>

            <div>
              <label for="last-name">Sobrenome:</label>
              <input id="last-name" type="text" v-model="lastName" />
            </div>

            <div>
              <label for="email">Email:</label>
              <input id="email" type="email" v-model="email" />
            </div>

            <div>
              <label for="company-name">Nome da Empresa:</label>
              <input id="company-name" type="text" v-model="companyName" />
            </div>

            <div>
              <label for="company-site">Site da Empresa:</label>
              <input id="company-site" type="text" v-model="companySite" />
            </div>

            <div>
              <label for="project-type">Tipo de Projeto:</label>
              <select id="project-type" v-model="projectType">
                <option value="Desenvolvimento Web">Desenvolvimento Web</option>
                <option value="Site Empresarial">Site Empresarial</option>
                <option value="Site para Startup">Site para Startup</option>
                <option value="Landing Page">Landing Page</option>
                <option value="Extensões Web">Extensões Web</option>
              </select>
            </div>

            <div>
              <label for="project-details">Fale sobre seu projeto:</label>
              <textarea
                id="project-details"
                v-model="projectDetails"
              ></textarea>
            </div>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>
    </main>

    <footer-component />
  </div>
</template>

<script>
import {
  HeaderComponent,
  HeroComponent,
  FooterComponent,
} from '../03-organisms'

export default {
  components: { HeaderComponent, HeroComponent, FooterComponent },
  mounted() {
    let callToAction = document.querySelector('.call-to-action')
    callToAction.style.display = 'none'
  },
}
</script>

<style lang="scss" scoped></style>

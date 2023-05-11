<template>
  <div>
    <header-component />
    <hero-component
      titleHero="Fale Conosco"
      subTitleHero="Se precisa de um projeto ou quer tirar dúvidas sobre nossos serviços, basta entrar em contato pelo formulário abaixo!"
    />

    <main>
      <section class="contact">
        <div class="wrapper">
          <h3>Preencha o formulário</h3>
          <form @submit.prevent="submitForm">
            <div class="personal division">
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
            </div>

            <div class="business division">
              <div>
                <label for="company-name">Nome da Empresa:</label>
                <input id="company-name" type="text" v-model="companyName" />
              </div>

              <div>
                <label for="company-site">Site da Empresa:</label>
                <input id="company-site" type="text" v-model="companySite" />
              </div>
            </div>

            <div class="project-idea division">
              <div>
                <label for="project-type">Tipo de Projeto:</label>
                <select id="project-type" v-model="projectType">
                  <option value="Desenvolvimento Web">
                    Desenvolvimento Web
                  </option>
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

<style lang="scss" scoped>
.contact {
  width: 100%;
  max-width: 1400px;
  height: auto;
  margin: 0 auto;
  padding: 57px 0 64px 0;
  background: #fff;

  .wrapper {
    width: calc(100% - 48px);
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      font-size: $section-title-size;
      text-align: center;
      margin-bottom: 20px;
    }

    form {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;

      .division {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;

        & > div {
          margin-bottom: 20px;

          label {
            width: 100%;
            display: block;
            margin-bottom: 4px;
          }

          input[type='text'],
          input[type='email'],
          textarea {
            width: 100%;
            padding: 0.5rem;
            border: 1px solid rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            font-size: 1rem;
            color: $color-general-text;

            &:focus {
              outline: none;
              border: 1px solid rgba(0, 0, 0, 0.3);
            }
          }

          textarea {
            min-height: 200px;
          }

          select {
            padding: 0.5rem;
            border: 1px solid rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            font-size: 1rem;
            color: $color-general-text;
            background-color: #fff;

            &:focus {
              outline: none;
              border: 1px solid rgba(0, 0, 0, 0.3);
            }
          }
        }

        & > div:last-child {
          margin-bottom: 0;
        }
      }

      button[type='submit'] {
        background-color: $color-branding;
        border: none;
        border-radius: 5px;
        color: white;
        font-size: 1.2rem;
        padding: 0.5rem 1rem;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: darken($color-branding, 10%);
        }
      }
    }
  }
}
</style>

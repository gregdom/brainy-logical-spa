<template>
  <section class="contact">
    <div class="wrapper">
      <h3>{{ mainTitle }}</h3>
      <form @submit.prevent="submitForm">
        <div class="personal division">
          <div class="divFirstName">
            <label for="first-name">Nome</label>
            <input
              class="first-name"
              type="text"
              v-model="firstName"
              placeholder="Nome"
            />
          </div>

          <div class="separator"></div>

          <div class="divLastName">
            <label for="last-name">Sobrenome</label>
            <input
              class="last-name"
              type="text"
              v-model="lastName"
              placeholder="Sobrenome"
            />
          </div>

          <div class="divEmail">
            <label for="email">Email</label>
            <input
              class="email"
              type="email"
              v-model="email"
              placeholder="Email"
            />
          </div>
        </div>

        <div class="business division">
          <div class="divCompany">
            <label for="company-name">Nome da Empresa</label>
            <input
              class="company-name"
              type="text"
              v-model="companyName"
              placeholder="Nome da Empresa"
            />
          </div>

          <div class="divSite">
            <label for="company-site">Site da Empresa</label>
            <input
              class="company-site"
              type="text"
              v-model="companySite"
              placeholder="Link do site atual"
            />
          </div>
        </div>

        <div class="project-idea division">
          <div>
            <label for="project-type">Tipo de Projeto</label>
            <select id="project-type" v-model="projectType">
              <option value="default">Escolher opção</option>
              <option value="Desenvolvimento Web">Desenvolvimento Web</option>
              <option value="empresarial">Site Empresarial</option>
              <option value="startup">Site para Startup</option>
              <option value="landing-page">Landing Page</option>
              <option value="extensao">Extensões Web</option>
              <option value="outros">Outros</option>
            </select>
          </div>

          <div>
            <label for="project-details">Fale sobre seu projeto</label>
            <textarea id="project-details" v-model="projectDetails"></textarea>
          </div>
        </div>

        <div class="divButton">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    mainTitle: {
      type: String,
      required: true,
    },
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

      // Faça o que desejar com os dados do formulário aqui

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
    padding: 0 20px 20px 20px;
    // border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // background: #fff;

    h3 {
      font-size: $section-title-size;
      text-align: center;
      margin: 0 0 64px 0;
      color: $color-text-dark;
      // margin-bottom: 20px;
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
        margin-bottom: 22px;

        & > div {
          margin-bottom: 20px;

          label {
            margin-bottom: 10px;
            display: block;
            font-size: 14px;
            font-weight: 600;
            line-height: 24px;
            color: #fff;
          }

          input[type='text'],
          input[type='email'],
          textarea {
            width: 100%;
            padding: 13px 22px;
            border-top: 1px solid transparent;
            border-left: 1px solid transparent;
            border-right: 1px solid transparent;
            border-bottom: 1px solid $color-highlight;
            font-size: 1rem;
            outline: none;
            color: #ffffff;
            background: transparent;

            &:focus {
              outline: none;
              color: #ffffff;
              border: 1px solid $color-highlight;
            }

            &::placeholder {
              color: #e2edff; /* Define a cor do placeholder como vermelho */
            }

            /* Estiliza o placeholder para o input com ID "email" */
            &::-webkit-input-placeholder {
              color: #c1d6ff; /* Define a cor do placeholder como azul em navegadores que suportam o prefixo "-webkit-" */
            }
          }

          textarea {
            border: 1px solid $color-highlight;
            min-height: 200px;
            padding: 10px;
          }

          select {
            width: 100%;
            padding: 13px 22px;
            border: 1px solid rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            font-size: 1rem;
            color: #fff;
            background-color: $color-branding;

            &:focus {
              outline: none;
              border: 1px solid $color-branding;
              color: #fff;
            }
          }
        }

        & > div:last-child {
          margin-bottom: 0;
        }
      }

      .divButton {
        width: 100%;
        height: auto;
        margin-top: 0;

        button[type='submit'] {
          cursor: pointer;
          width: 100%;
          padding: 15px 25px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Open Sans', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          text-decoration: none;
          border: none;
          border-radius: 5px;
          transition: 0.2s;
          color: #33373b;
          background: $color-highlight;
        }
      }
    }
  }
}

@media (min-width: 600px) {
  .contact {
    .wrapper {
      width: 500px;
    }
  }
}

@media (min-width: 768px) {
  .contact {
    .wrapper {
      width: 90%;
      max-width: 940px;

      form {
        .division {
          all: unset;
          width: 80%;

          select {
            width: 100%;
            max-width: 48%;
          }
        }

        .personal {
          display: grid;
          grid-template-columns: 1fr 20px 1fr;
          grid-template-rows: auto auto;
          grid-template-areas:
            'firstName separator lastName'
            'email email email';
          margin-bottom: 32px;

          .divFirstName {
            grid-area: firstName;
          }
          .separator {
            grid-area: separator;
          }
          .divLastName {
            grid-area: lastName;
          }
          .divEmail {
            grid-area: email;
          }
        }

        .business {
          display: grid;
          grid-template-columns: 1fr 20px 1fr;
          grid-template-rows: auto;
          grid-template-areas: 'divCompany separator divSite';
          margin-bottom: 32px;

          & > div {
            margin-bottom: 0;
          }

          .divCompany {
            grid-area: divCompany;
          }
          .separator {
            grid-area: separator;
          }
          .divSite {
            grid-area: divSite;
          }
        }

        .divButton {
          width: 80%;
          height: auto;
          margin-top: 20px;
          display: flex;
          justify-content: flex-end;

          button[type='submit'] {
            width: fit-content;
            font-size: 1rem;
          }
        }
      }
    }
  }
}
</style>

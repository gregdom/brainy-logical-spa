<template>
  <section class="contact">
    <div class="wrapper">
      <h3>{{ mainTitle }}</h3>
      <span class="subtitle">Fale para nós o que você precisa</span>
      <form @submit.prevent="submitForm">
        <div class="personal division">
          <div class="divFirstName inner">
            <input
              class="first-name fieldEntry"
              type="text"
              v-model="contactForm.firstName"
            />
            <label for="first-name">Nome</label>
            <span v-if="this.v$.contactForm.firstName.$error" class="error"
              >Não pode estar vazio</span
            >
          </div>

          <div class="separator"></div>

          <div class="divLastName inner">
            <input
              class="last-name fieldEntry"
              type="text"
              v-model="contactForm.lastName"
            />
            <label for="last-name">Sobrenome</label>
          </div>

          <div class="divEmail inner">
            <input
              class="email fieldEntry"
              type="email"
              v-model="contactForm.email"
            />
            <label for="email">Email</label>
          </div>
        </div>

        <div class="business division">
          <div class="divCompany inner">
            <input
              class="company-name fieldEntry"
              type="text"
              v-model="contactForm.companyName"
            />
            <label for="company-name">Nome da Empresa</label>
          </div>

          <div class="divSite inner">
            <input
              class="company-site fieldEntry"
              type="text"
              v-model="contactForm.companySite"
            />
            <label for="company-site">Site da Empresa</label>
          </div>
        </div>

        <div class="project-idea division">
          <div>
            <label class="labelInit" for="project-type">Tipo de Projeto</label>
            <select id="project-type" v-model="contactForm.projectType">
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
            <label class="labelInit" for="project-details"
              >Fale sobre seu projeto</label
            >
            <textarea
              id="project-details"
              v-model="contactForm.projectDetails"
            ></textarea>
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
import { useReCaptcha } from 'vue-recaptcha-v3'
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
// import axios from 'axios'

export default {
  props: {
    mainTitle: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      contactForm: reactive({
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        companySite: '',
        projectType: 'default',
        projectDetails: '',
      }),
      recaptchaToken: '',
    }
  },
  validations: {
    contactForm: {
      firstName: { required },
      lastName: {},
      email: { required, email },
      companyName: {},
      companySite: { required },
      projectType: { required },
      projectDetails: { required },
    },
  },
  setup() {
    const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()
    const v$ = useVuelidate()

    const recaptcha = async () => {
      await recaptchaLoaded()
      const token = await executeRecaptcha('form_contact_projects')
      console.log(token)

      return token
    }

    return {
      v$,
      recaptcha,
    }
  },

  methods: {
    submitForm() {
      this.v$.$touch()
      if (!this.v$.$invalid) {
        // Lógica para enviar o formulário
        console.log('Formulário válido. Enviar dados:', this.contactForm)
      } else {
        console.log('Formulário inválido. Corrija os erros.')
      }
    },
  },
  watch: {
    recaptchaToken() {
      console.log('oi')
    },
  },
}
</script>

<style lang="scss" scoped>
.error {
  color: red;
}

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
      margin: 0 0 16px 0;
      color: $color-text-dark;
      // margin-bottom: 20px;
    }

    .subtitle {
      margin-bottom: 64px;
      font-size: 1rem;
      color: #686f74;
      text-align: center;
    }

    form {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;

      .separator {
        display: none;
      }

      .division {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        margin-bottom: 22px;
        position: relative;

        .inner {
          position: relative;
        }

        & > div {
          margin-bottom: 20px;

          label {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            pointer-events: none;
            display: block;
            font-size: 14px;
            font-weight: 600;
            line-height: 24px;
            color: #89949e;
            z-index: 9999;
            transition: 0.2s;
          }

          .labelInit {
            all: unset;
            margin-bottom: 10px;
            padding: 0 5px;
            display: block;
            font-size: 14px;
            font-weight: 600;
            line-height: 24px;
            color: #89949e;
          }

          input[type='text'],
          input[type='email'],
          textarea {
            width: 100%;
            padding: 13px 5px;
            border-top: 1px solid transparent;
            border-left: 1px solid transparent;
            border-right: 1px solid transparent;
            border-bottom: 1px solid #a1b0bf;
            font-size: 1rem;
            outline: none;
            color: #89949e;
            background: transparent;

            &:focus {
              outline: none;
              color: #89949e;

              ~ label {
                top: 0;
                left: 0;
                color: $color-branding;
              }
            }
          }

          textarea {
            font-family: 'Open Sans', sans-serif;
            font-size: 14px;
            border: 1px solid #a1b0bf;
            min-height: 200px;
            padding: 10px;
          }

          select {
            width: 100%;
            padding: 13px 22px;
            border: 1px solid #a1b0bf;
            border-radius: 5px;
            font-size: 1rem;
            outline: none;
            color: #89949e;
            background-color: #fff;

            &:focus {
              outline: none;
              border: 1px solid $color-branding;
              color: #89949e;
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
          color: #fff;
          background: $color-branding;
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
        .separator {
          display: unset;
        }

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

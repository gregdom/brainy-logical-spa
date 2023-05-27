<template>
  <section class="contact">
    <div class="wrapper wrapperForm">
      <h3>{{ mainTitle }}</h3>
      <span class="subtitle">Fale para nós o que você precisa</span>
      <form @submit.prevent="submitForm">
        <div class="personal division">
          <div class="divFirstName inner">
            <input
              class="first-name fieldEntry"
              :class="{ error: v$.contactForm.firstName.$error }"
              type="text"
              v-model.trim="contactForm.firstName"
            />
            <label :class="{ active: contactForm.firstName }" for="first-name"
              >Nome<small>*</small>
            </label>
            <span v-if="v$.contactForm.firstName.$error">
              {{ v$.contactForm.firstName.$errors[0].$message }}
            </span>
          </div>

          <div class="separator"></div>

          <div class="divLastName inner">
            <input
              class="last-name fieldEntry"
              type="text"
              v-model.trim="contactForm.lastName"
            />
            <label :class="{ active: contactForm.lastName }" for="last-name"
              >Sobrenome</label
            >
          </div>

          <div class="divEmail inner">
            <input
              class="email fieldEntry"
              :class="{ error: v$.contactForm.email.$error }"
              type="email"
              v-model.trim="contactForm.email"
            />
            <label :class="{ active: contactForm.email }" for="email"
              >Email<small>*</small>
            </label>
            <span v-if="v$.contactForm.email.$error">
              {{ v$.contactForm.email.$errors[0].$message }}
            </span>
          </div>
        </div>

        <div class="business division">
          <div class="divCompany inner">
            <input
              class="company-name fieldEntry"
              type="text"
              v-model.trim="contactForm.companyName"
            />
            <label
              :class="{ active: contactForm.companyName }"
              for="company-name"
              >Nome da Empresa</label
            >
          </div>

          <div class="divSite inner">
            <input
              class="company-site fieldEntry"
              type="text"
              v-model.trim="contactForm.companySite"
            />
            <label
              :class="{ active: contactForm.companySite }"
              for="company-site"
              >Site da Empresa</label
            >
          </div>
        </div>

        <div class="project-idea division">
          <div class="innerSelect">
            <label class="labelInit" for="project-type"
              >Tipo de Projeto<small>*</small>
            </label>
            <select id="project-type" v-model="contactForm.projectType">
              <option disabled value="">-- Selecione</option>
              <option value="Desenvolvimento Web">Desenvolvimento Web</option>
              <option value="empresarial">Site Empresarial</option>
              <option value="startup">Site para Startup</option>
              <option value="landing-page">Landing Page</option>
              <option value="extensao">Extensões Web</option>
              <option value="outros">Outros</option>
            </select>
            <span v-if="v$.contactForm.projectType.$error">
              {{ v$.contactForm.projectType.$errors[0].$message }}
            </span>
          </div>

          <div class="innerTextArea">
            <label class="labelInit" for="project-details"
              >Fale sobre seu projeto<small>*</small>
            </label>
            <textarea
              id="project-details"
              v-model="contactForm.projectDetails"
            ></textarea>

            <span v-if="v$.contactForm.projectDetails.$error">
              {{ v$.contactForm.projectDetails.$errors[0].$message }}
            </span>
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
import {
  required,
  email,
  maxLength,
  helpers,
  minLength,
} from '@vuelidate/validators'
import axios from 'axios'

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
        projectType: '',
        projectDetails: '',
      }),
      recaptchaToken: '',
    }
  },
  validations: {
    contactForm: {
      firstName: {
        required: helpers.withMessage('Não pode estar vazio', required),
        maxLength: helpers.withMessage('Max. 5 caracteres', maxLength(25)),
      },
      lastName: {},
      email: {
        required: helpers.withMessage('Não pode estar vazio', required),
        email: helpers.withMessage('Não parece um email válido', email),
      },
      companyName: {},
      companySite: {},
      projectType: {
        required: helpers.withMessage('Não pode estar vazio', required),
      },
      projectDetails: {
        required: helpers.withMessage('Não pode estar vazio', required),
        minLength: helpers.withMessage('Descrição muito curta', minLength(10)),
        maxLength: helpers.withMessage('Max. 1500 caracteres', maxLength(1500)),
      },
    },
  },
  setup() {
    const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()
    const v$ = useVuelidate()

    const recaptcha = async () => {
      await recaptchaLoaded()
      const token = await executeRecaptcha('form_contact_projects')
      // console.log(token)

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
        console.log('Formulário válido')
        this.recaptcha().then((token) => {
          this.recaptchaToken = token
          this.sendForm() // Chama sendForm após obter o token
        })
      } else {
        console.log('Formulário inválido. Corrija os erros.')
      }
    },

    sendForm() {
      const formData = {
        firstName: this.contactForm.firstName,
        lastName: this.contactForm.lastName,
        email: this.contactForm.email,
        companyName: this.contactForm.companyName,
        companySite: this.contactForm.companySite,
        projectType: this.contactForm.projectType,
        projectDetails: this.contactForm.projectDetails,
      }

      const token = this.recaptchaToken
      console.log(formData, token)

      const execute = async (formData, token) => {
        try {
          const response = await axios.post('/api/contact-projects', {
            formData,
            token,
          })

          // Resposta recebida com sucesso
          const responseData = response.data
          console.log(responseData.message)
        } catch (error) {
          console.log(error, 'Erro ao processar o formulário')
        }
      }

      execute(formData, token)
    },
  },
  watch: {
    recaptchaToken() {
      console.log('oi')
    },
  },
  mounted() {
    let attempts = 0

    const moveGrecaptchaBadge = () => {
      let grecaptchaBadge = document.querySelector('.grecaptcha-badge')
      let containerWrapper = document.querySelector('.wrapperForm')

      if (grecaptchaBadge && containerWrapper) {
        containerWrapper.appendChild(grecaptchaBadge)
      } else {
        attempts++

        if (attempts < 10) {
          setTimeout(moveGrecaptchaBadge, 1000) // Tenta novamente após 1 segundo
        }
      }
    }

    moveGrecaptchaBadge()
  },
}
</script>

<style lang="scss" scoped>
.error {
  border-bottom: 1px solid #bb3838 !important;
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
        margin-bottom: 30px;
        position: relative;

        .inner {
          position: relative;

          span {
            position: absolute;
            bottom: -15px;
            left: 0;
            pointer-events: none;
            display: block;
            font-size: 10px;
            color: #fff;
            z-index: 9999;
            transition: 0.2s;
            background: #bb3838;
            padding: 1px 4px;
            text-transform: uppercase;
          }
        }

        & > div {
          margin-bottom: 30px;

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
            z-index: 1000;
            transition: 0.2s;

            &.active {
              top: 0;
              left: 0;
              color: $color-branding;
            }
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
          input[type='email'] {
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
        }

        & > div:last-child {
          margin-bottom: 0;
        }

        .innerSelect {
          position: relative;

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

          span {
            position: absolute;
            bottom: -15px;
            left: 0;
            pointer-events: none;
            display: block;
            font-size: 10px;
            color: #fff;
            z-index: 9999;
            transition: 0.2s;
            background: #bb3838;
            padding: 1px 4px;
            text-transform: uppercase;
          }
        }

        .innerTextArea {
          position: relative;

          textarea {
            width: 100%;
            padding: 13px 5px;
            font-size: 1rem;
            outline: none;
            font-family: 'Open Sans', sans-serif;
            font-size: 14px;
            border: 1px solid #a1b0bf;
            min-height: 200px;
            padding: 10px;
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

          span {
            position: absolute;
            bottom: -15px;
            left: 0;
            pointer-events: none;
            display: block;
            font-size: 10px;
            color: #fff;
            z-index: 9999;
            transition: 0.2s;
            background: #bb3838;
            padding: 1px 4px;
            text-transform: uppercase;
          }
        }
      }

      .divButton {
        width: 100%;
        height: auto;
        margin-top: 0;
        margin-bottom: 20px;

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

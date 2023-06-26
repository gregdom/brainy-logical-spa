<template>
  <section class="contact contact-form">
    <div v-show="!submitSituation" class="container-default">
      <div class="subtitle">Queremos ouvir você</div>

      <h2>{{ mainTitle }}</h2>

      <form @submit.prevent="submitForm">
        <div class="divFirstName wrapper-input">
          <label :class="{ active: contactForm.firstName }" for="first-name"
            >Nome<small>*</small>
          </label>
          <input
            class="first-name fieldEntry"
            :class="{ error: v$.contactForm.firstName.$error }"
            type="text"
            v-model.trim="contactForm.firstName"
            placeholder="Qual é o seu nome?"
          />

          <span v-if="v$.contactForm.firstName.$error">
            {{ v$.contactForm.firstName.$errors[0].$message }}
          </span>
        </div>

        <div class="divEmail wrapper-input">
          <label :class="{ active: contactForm.email }" for="email"
            >Email<small>*</small>
          </label>
          <input
            class="email fieldEntry"
            :class="{ error: v$.contactForm.email.$error }"
            type="email"
            v-model.trim="contactForm.email"
            placeholder="Qual é o seu email?"
          />

          <span v-if="v$.contactForm.email.$error">
            {{ v$.contactForm.email.$errors[0].$message }}
          </span>
        </div>

        <div class="divCompany wrapper-input">
          <label :class="{ active: contactForm.companyName }" for="company-name"
            >Empresa
          </label>
          <input
            class="company-name fieldEntry"
            type="text"
            v-model.trim="contactForm.companyName"
            placeholder="Nome da empresa"
          />

          <span v-if="v$.contactForm.companyName.$error">
            {{ v$.contactForm.companyName.$errors[0].$message }}
          </span>
        </div>

        <div class="divSite wrapper-input">
          <label :class="{ active: contactForm.companySite }" for="company-site"
            >Site
          </label>
          <input
            class="company-site fieldEntry"
            type="text"
            v-model.trim="contactForm.companySite"
            placeholder="Seu site (opcional)"
          />

          <span v-if="v$.contactForm.companySite.$error">
            {{ v$.contactForm.companySite.$errors[0].$message }}
          </span>
        </div>

        <div class="project-idea wrapper-input">
          <div class="wrapper-inputSelect wrapper-input">
            <label class="labelInit" for="project-type"
              >Tipo de projeto<small>*</small>
            </label>
            <select id="project-type" v-model="contactForm.projectType">
              <option disabled value="">-- Selecione</option>
              <option
                v-for="(category, index) in categoriesArr"
                :key="index"
                :value="category.id"
              >
                {{ category.name }}
              </option>
            </select>
            <span v-if="v$.contactForm.projectType.$error">
              {{ v$.contactForm.projectType.$errors[0].$message }}
            </span>
          </div>

          <div class="wrapper-inputTextArea">
            <label class="labelInit" for="project-details"
              >Fale sobre seu projeto<small>*</small>
            </label>
            <textarea
              id="project-details"
              v-model="contactForm.projectDetails"
              placeholder="Digite sua mensagem aqui..."
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
    <div v-show="submitSituation" class="formNotification">
      <div class="container-wrapper">
        <div
          class="text-status-submit"
          :class="{ active: submitSituation.statusCode !== 200 }"
        >
          {{ submitSituation.message }}
        </div>
      </div>
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
import DOMPurify from 'dompurify'
import axios from 'axios'
// import { mapState } from 'vuex'

export default {
  props: {
    mainTitle: {
      type: String,
      required: true,
    },
  },

  components: {},

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
      submitSituation: false,
      categoriesArr: [
        { name: 'Extensão para Navegador' },
        { name: 'Criação de Websites' },
        { name: 'Criação de Landing Pages' },
      ],
    }
  },
  validations: {
    contactForm: {
      firstName: {
        required: helpers.withMessage('Não pode estar vazio', required),
        maxLength: helpers.withMessage('Max. 25 caracteres', maxLength(25)),
      },
      lastName: {
        maxLength: helpers.withMessage('Max. 45 caracteres', maxLength(45)),
      },
      email: {
        required: helpers.withMessage('Não pode estar vazio', required),
        email: helpers.withMessage('Não parece um email válido', email),
        maxLength: helpers.withMessage('Max. 45 caracteres', maxLength(45)),
      },
      companyName: {
        maxLength: helpers.withMessage('Max. 45 caracteres', maxLength(45)),
      },
      companySite: {
        maxLength: helpers.withMessage('Max. 45 caracteres', maxLength(45)),
      },
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
  // computed: {
  //   ...mapState(['categories']),
  //   categoriesArr() {
  //     if (this.categories.length > 0) {
  //       return this.categories
  //     }
  //     return ''
  //   },
  // },
  setup() {
    const { executeRecaptcha, recaptchaLoaded } = useReCaptcha(
      '6LdwfzUmAAAAAH4ZK5NtLDhW_apfE1-oef2Ky0Ta'
    )
    const v$ = useVuelidate()

    const recaptcha = async () => {
      await recaptchaLoaded()
      const token = await executeRecaptcha('form_contact_projects')
      return token
    }

    return {
      v$,
      recaptcha,
    }
  },

  methods: {
    reset() {
      this.contactForm.firstName = ''
      this.contactForm.lastName = ''
      this.contactForm.email = ''
      this.contactForm.companyName = ''
      this.contactForm.companySite = ''
      this.contactForm.projectType = ''
      this.contactForm.projectDetails = ''
      this.recaptchaToken = ''
    },

    submitForm() {
      this.v$.$touch()
      if (!this.v$.$invalid) {
        this.recaptcha().then((token) => {
          this.recaptchaToken = token
          this.sendForm()
        })
      } else {
        return
      }
    },

    sendForm() {
      const formData = {
        firstName: DOMPurify.sanitize(this.contactForm.firstName),
        lastName: DOMPurify.sanitize(this.contactForm.lastName),
        email: DOMPurify.sanitize(this.contactForm.email),
        companyName: DOMPurify.sanitize(this.contactForm.companyName),
        companySite: DOMPurify.sanitize(this.contactForm.companySite),
        projectType: DOMPurify.sanitize(this.contactForm.projectType),
        projectDetails: DOMPurify.sanitize(this.contactForm.projectDetails),
      }

      const token = this.recaptchaToken

      const execute = async (formData, token) => {
        try {
          const response = await axios.post('/api/contact-projects', {
            formData,
            token,
          })

          // Resposta recebida com sucesso
          const responseData = response.data
          this.submitSituation = responseData
          this.reset()
        } catch {
          const responseData = {
            message:
              'Houve um erro! Tente enviar sua mensagem através do chat online se o erro persistir!',
            statusCode: 400,
          }
          this.submitSituation = responseData
        }
      }

      execute(formData, token)
    },
  },
  mounted() {
    let attempts = 0

    const moveGrecaptchaBadge = () => {
      let grecaptchaBadge = document.querySelector('.grecaptcha-badge')
      let containerWrapper = document.querySelector('.contact-form')

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

.contact-form {
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 80px;

  .container-default {
    max-width: 1257px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 30px;
    padding-left: 16px;
    padding-right: 16px;

    div.subtitle {
      margin-bottom: 8px;
      font-size: 20px;
      font-weight: 500;
      letter-spacing: -0.02em;
      line-height: 1em;
      color: $color-branding;
    }

    h2 {
      margin-bottom: 25px;
      font-size: 26px;
      line-height: 1.368em;
      font-weight: 800;
      letter-spacing: -0.02em;
      text-shadow: 0 3px 6px rgba(39, 99, 228, 0.11);
      color: #071221;
    }

    form {
      padding: 30px 20px 40px;
      border: 1px solid #cecdcc;
      border-radius: 28px;
      display: grid;
      grid-auto-columns: 1fr;
      grid-template-rows: auto;
      font-family: 'Plus Jakarta Sans', sans-serif;

      .wrapper-input {
        width: 100%;
        margin-bottom: 20px;

        label {
          display: block;
          margin-bottom: 10px;
          font-weight: 600;
          color: #071221;
        }

        input {
          width: 100%;
          height: 62px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          margin-bottom: 0px;
          padding-right: 16px;
          padding-left: 16px;
          border-style: solid;
          border-width: 1px;
          border-color: #f6f8fb;
          border-radius: 10px;
          box-shadow: 0 2px 8px 0 rgba(44, 143, 255, 0.01),
            0 1px 3px 0 rgba(7, 16, 33, 0.06);
          -webkit-transition: border-color 350ms ease, color 350ms ease;
          transition: border-color 350ms ease, color 350ms ease;
          color: #46526b;
          font-size: 16px;
          font-weight: 500;
          outline: none;

          &:hover {
            border: 1px solid $color-branding;
          }
        }

        select {
          padding: 16px;
          border-style: solid;
          border-width: 1px;
          border-color: #f6f8fb;
          border-radius: 10px;
          box-shadow: 0 2px 8px 0 rgba(44, 143, 255, 0.01),
            0 1px 3px 0 rgba(7, 16, 33, 0.06);
          -webkit-transition: border-color 350ms ease, color 350ms ease;
          transition: border-color 350ms ease, color 350ms ease;
          color: #46526b;
          font-size: 16px;
          font-weight: 500;
          background: #fff;
        }

        textarea {
          width: 100%;
          min-height: 200px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          margin-bottom: 0px;
          padding: 16px;
          border-style: solid;
          border-width: 1px;
          border-color: #f6f8fb;
          border-radius: 10px;
          box-shadow: 0 2px 8px 0 rgba(44, 143, 255, 0.01),
            0 1px 3px 0 rgba(7, 16, 33, 0.06);
          -webkit-transition: border-color 350ms ease, color 350ms ease;
          transition: border-color 350ms ease, color 350ms ease;
          color: #46526b;
          font-size: 16px;
          font-weight: 500;
          outline: none;
        }
      }

      button {
        cursor: pointer;
        text-decoration: none;
        display: block;
        padding: 18px 35px;
        border-radius: 10px;
        transition: transform 350ms ease, box-shadow 350ms ease,
          background-color 350ms ease, -webkit-transform 350ms ease;
        line-height: 1em;
        text-align: center;
        font-size: 1rem;
        font-weight: 500;
        border: none;
        color: #fff;
        background: $color-branding;

        &:hover {
          background: darken($color-branding, 20%);
          box-shadow: 0 0 0 0 rgba(48, 44, 255, 0.1);
          -webkit-transform: scale3d(0.95, 0.95, 1.01);
          transform: scale3d(0.95, 0.95, 1.01);
          color: #fff;
        }
      }
    }
  }
}

@media screen and (min-width: 480px) {
  .contact-form {
    .container-default {
      padding-left: 24px;
      padding-right: 24px;

      div.subtitle {
        margin-bottom: 10px;
      }

      h2 {
        font-size: 31px;
        margin-bottom: 30px;
      }

      form {
        padding: 40px 40px 60px;

        .wrapper-input {
          margin-bottom: 30px;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .contact-form {
    .container-default {
      max-width: 90%;

      div.subtitle {
        margin-bottom: 16px;
      }

      h2 {
        font-size: 38px;
        margin-bottom: 30px;
      }

      form {
        padding: 60px 60px 70px;
        display: grid;
        grid-auto-columns: 1fr;
        grid-column-gap: 28px;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;

        .wrapper-input {
          margin-bottom: 32px;
        }

        .project-idea {
          grid-column-start: span 2;
          grid-column-end: span 2;
          grid-row-start: span 1;
          grid-row-end: span 1;
        }
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .contact-form {
    .container-default {
      max-width: 70%;

      h2 {
        margin-bottom: 30px;
      }

      form {
        padding: 64px 73px 74px;
      }
    }
  }
}
</style>

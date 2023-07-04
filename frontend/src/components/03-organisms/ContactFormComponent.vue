<template>
  <section class="contact contact-form">
    <div class="container-default">
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
            <select
              id="project-type"
              :class="{ error: v$.contactForm.projectType.$error }"
              v-model="contactForm.projectType"
            >
              <option disabled value="">-- Selecione</option>
              <option
                v-for="(category, index) in categoriesArr"
                :key="index"
                :value="category.id"
              >
                {{ category.name }}
              </option>
            </select>
            <br />
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
              :class="{ error: v$.contactForm.projectDetails.$error }"
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

        <div class="overlay-form" v-show="overlayForm"></div>
      </form>

      <notification-item
        v-if="situation"
        :situation="situation"
        :submitSituation="submitSituation"
        @progress-complete="handleProgressComplete"
      />
      <loading-item :showLoader="showLoader" />
    </div>
  </section>
</template>

<script>
import { LoadingItem, NotificationItem } from '../01-atoms'
import { reactive } from 'vue'

// ReCAPTCHA, Validadores e link da API
import { useReCaptcha } from 'vue-recaptcha-v3'
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
import { BACKEND_API } from '../../baseUrl'

export default {
  props: {
    mainTitle: {
      type: String,
      required: true,
    },
  },

  components: { LoadingItem, NotificationItem },

  data() {
    return {
      contactForm: reactive({
        firstName: '',
        email: '',
        companyName: '',
        companySite: '',
        projectType: '',
        projectDetails: '',
      }),
      recaptchaToken: '',
      overlayForm: false,
      situation: false,
      submitSituation: {},
      showLoader: false,
    }
  },
  validations: {
    contactForm: {
      firstName: {
        required: helpers.withMessage('Não pode estar vazio', required),
        maxLength: helpers.withMessage('Max. 25 caracteres', maxLength(25)),
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

  computed: {
    categoriesArr() {
      return this.$store.state.data.categories.filter((category) =>
        [1, 4, 5, 11].includes(category.id)
      )
    },
  },

  setup() {
    const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()
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
        this.overlayForm = true
        this.showLoader = true
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
        email: DOMPurify.sanitize(this.contactForm.email),
        companyName: DOMPurify.sanitize(this.contactForm.companyName),
        companySite: DOMPurify.sanitize(this.contactForm.companySite),
        projectType: DOMPurify.sanitize(this.contactForm.projectType),
        projectDetails: DOMPurify.sanitize(this.contactForm.projectDetails),
      }

      const token = this.recaptchaToken

      const execute = async (formData, token) => {
        try {
          const response = await axios.post(
            `${BACKEND_API}/api/contact-projects`,
            {
              formData,
              token,
            }
          )

          // Resposta recebida com sucesso
          const responseData = response.data
          if (responseData) {
            this.submitSituation = {
              title: 'Sucesso',
              message: 'Sua mensagem foi enviada com sucesso!',
              statusCode: 200,
              notificationType: 'success',
            }
          }

          this.situation = true
        } catch {
          const responseData = {
            title: 'Erro',
            message:
              'Houve um erro interno! Envie sua mensagem através do chat online se o erro persistir!',
            statusCode: 400,
            notificationType: 'error',
          }

          this.overlayForm = true
          this.submitSituation = responseData
          this.situation = true
        } finally {
          this.showLoader = false
        }
      }

      execute(formData, token)
    },

    handleProgressComplete() {
      this.situation = false
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
          setTimeout(moveGrecaptchaBadge, 1000)
        }
      }
    }

    moveGrecaptchaBadge()
  },
}
</script>

<style lang="scss" scoped>
.error {
  border: 1px solid #f53434 !important;
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
      color: $color-general-headers;
    }

    form {
      position: relative;
      padding: 30px 20px 40px;
      border: $border-default;
      border-radius: 28px;
      display: grid;
      grid-auto-columns: 1fr;
      grid-template-rows: auto;
      font-family: 'Plus Jakarta Sans', sans-serif;

      .overlay-form {
        position: absolute;
        z-index: 2000;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 28px;
        background: rgba(255, 255, 255, 0.7);

        &.active {
          display: block;
        }
      }

      .wrapper-input {
        width: 100%;
        margin-bottom: 20px;

        label {
          display: block;
          margin-bottom: 10px;
          font-weight: 600;
          color: $color-general-headers;
        }

        input {
          width: 100%;
          height: 62px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          margin-bottom: 5px;
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
            border: $border-hover;
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
          background: $color-white;
        }

        textarea {
          width: 100%;
          min-height: 200px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          margin-bottom: 5px;
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

        span {
          padding: 3px 5px;
          font-size: 13px;
          font-weight: 500;
          border-radius: 5px;
          color: $color-white;
          background: #e42727;
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
        color: $color-white;
        background: $color-branding;

        &:hover {
          background: $color-branding-dark;
          box-shadow: 0 0 0 0 rgba(48, 44, 255, 0.1);
          -webkit-transform: scale3d(0.95, 0.95, 1.01);
          transform: scale3d(0.95, 0.95, 1.01);
          color: $color-white;
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

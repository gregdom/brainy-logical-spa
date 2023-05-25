<template>
  <div></div>
</template>

<script>
import { useReCaptcha } from 'vue-recaptcha-v3'
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
      firstName: '',
      lastName: '',
      email: '',
      companyName: '',
      companySite: '',
      projectType: 'default',
      projectDetails: '',
    }
  },
  setup() {
    const submitForm = async () => {
      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        companyName: this.companyName,
        companySite: this.companySite,
        projectType: this.projectType,
        projectDetails: this.projectDetails,
      }

      const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()

      try {
        await recaptchaLoaded()
        const token = await executeRecaptcha('form_contact_projects')
        console.log(token)

        // Envie o formulário para o backend junto com o token
        const response = await this.enviarFormulario(formData, token)

        // Faça algo com a resposta do backend, como exibir uma mensagem de sucesso ou redirecionar para outra página
        console.log(response)
      } catch (error) {
        // Lida com erros, como falha ao carregar o reCAPTCHA ou erro de envio do formulário
        console.error(error)
      }
    }

    const enviarFormulario = async (formData, token) => {
      try {
        const response = await axios.post('/contact-projects', {
          formData,
          token,
        })

        return response.data
      } catch (error) {
        throw new Error('Erro ao processar o formulário')
      }
    }

    const resetForm = () => {
      this.firstName = ''
      this.lastName = ''
      this.email = ''
      this.companyName = ''
      this.companySite = ''
      this.projectType = ''
      this.projectDetails = ''
    }

    return {
      submitForm,
      enviarFormulario,
      resetForm,
    }
  },
}
</script>

<style lang="scss" scoped></style>

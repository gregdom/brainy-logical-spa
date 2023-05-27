<template>
  <div></div>
</template>

<script>
import { useReCaptcha } from 'vue-recaptcha-v3'

export default {
  setup() {
    const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()

    const recaptcha = async () => {
      await recaptchaLoaded()
      const token = await executeRecaptcha('form_contact_projects')
      // console.log(token)

      return token
    }

    return {
      recaptcha,
    }
  },
}
</script>

<style lang="scss" scoped></style>

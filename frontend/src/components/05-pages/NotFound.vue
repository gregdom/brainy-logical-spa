<template>
  <section class="notFound">
    <div class="wrapper">
      <img src="../../assets/images/404-not-found.svg" alt="Icon" />
      <button-primary link="/" :buttonText="'Voltar ao Início'" />
    </div>
  </section>
</template>

<script>
import { ButtonPrimary } from '../01-atoms'

export default {
  components: { ButtonPrimary },
  mounted() {
    let attemptsCaptcha = 0
    const hideCaptcha = () => {
      let grecaptchaBadge = document.querySelector('.grecaptcha-badge')
      if (grecaptchaBadge) {
        grecaptchaBadge.style.display = 'none'
      } else {
        attemptsCaptcha++
        if (attemptsCaptcha < 10) {
          setTimeout(hideCaptcha, 1000)
        }
      }
    }
    hideCaptcha()
  },
}
</script>

<style lang="scss" scoped>
.grecaptcha-badge {
  display: none;
}

.notFound {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: $color-white;

  .wrapper {
    width: 100%;
    max-width: 500px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;

    h2 {
      margin-top: 0px;
      margin-bottom: 25px;
      font-size: 16px;
      line-height: 1.368em;
      font-weight: 500;
      letter-spacing: -0.02em;
      text-shadow: 0 3px 6px rgba(39, 99, 228, 0.11);
      color: $color-general-headers;
    }
  }
}
</style>

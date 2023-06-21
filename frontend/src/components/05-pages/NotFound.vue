<template>
  <section class="notFound">
    <div class="wrapper">
      <h2>404</h2>
      <h3>Você procurou algo que não existe no site!</h3>
      <!-- <button-call-to-action link="/" :buttonText="'Voltar ao Início'" /> -->
    </div>
  </section>
</template>

<script>
// import { ButtonCallToAction } from '../01-atoms'

export default {
  // components: { ButtonCallToAction },
  // mounted() {
  //   let attemptsCaptcha = 0
  //   const hideCaptcha = () => {
  //     let grecaptchaBadge = document.querySelector('.grecaptcha-badge')
  //     if (grecaptchaBadge) {
  //       grecaptchaBadge.style.display = 'none'
  //     } else {
  //       attemptsCaptcha++
  //       if (attemptsCaptcha < 10) {
  //         setTimeout(hideCaptcha, 1000)
  //       }
  //     }
  //   }
  //   hideCaptcha()
  // },
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
  background: $color-branding-gradient;

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
      font-size: 8rem;
      text-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
    }

    h3 {
      font-size: 2rem;
      margin-bottom: 32px;
      text-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
    }

    .call-to-action {
      width: fit-content;
      padding: 0 20px;
      color: #33373b;
      background: $color-highlight;
    }
  }
}
</style>

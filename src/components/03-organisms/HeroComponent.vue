<template>
  <section class="hero">
    <div class="wrapper">
      <h1>Soluções Para Impulsionar Sua Presença Online</h1>
      <h2>
        Nossa equipe está pronta para criar soluções personalizadas e eficientes
        que se adaptam às necessidades do seu negócio.
      </h2>

      <button-call-to-action buttonText="Nossos Projetos" />
    </div>
  </section>
</template>

<script>
import { ButtonCallToAction } from '../01-atoms'

export default {
  components: { ButtonCallToAction },
}
</script>

<style lang="scss">
.hero {
  width: 100%;
  max-width: 1400px;
  height: auto;
  margin: 0 auto;
  padding: 57px 0 64px 0;
  background: #212529;
  background-image: linear-gradient(rgba(33, 37, 41, 0.01), rgb(33, 37, 41) 85%),
    radial-gradient(at 0% 0%, rgba(117, 13, 253, 0.5), rgba(0, 0, 0, 0) 50%),
    radial-gradient(at 100% 0%, rgba(214, 51, 132, 0.5), rgba(0, 0, 0, 0) 50%),
    radial-gradient(at 100% 50%, rgba(113, 44, 249, 0.5), rgba(0, 0, 0, 0) 50%),
    radial-gradient(at 0% 50%, rgba(255, 228, 132, 0.5), rgba(0, 0, 0, 0) 50%);

  .wrapper {
    width: calc(100% - 48px);
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: calc(1.525rem + 3.3vw);
      font-weight: 700;
      // line-height: ;
      text-align: center;
      margin-bottom: 16px;
      color: #fff;
    }

    h2 {
      font-size: 1rem;
      font-weight: 400;
      line-height: $general-line-height;
      text-align: center;
      margin-bottom: 37px;
      color: #adb5bd;
    }

    & > * {
      margin-bottom: 37px;
    }

    & > *:last-child {
      margin-bottom: 0;
    }
  }
}

@media (min-width: 600px) {
  .hero {
    padding: 64px 0 84px 0;

    .wrapper {
      width: 500px;

      h1 {
        font-size: 50px;
      }
    }
  }
}

@media (min-width: 768px) {
  .hero {
    .wrapper {
      width: 668px;

      .call-to-action {
        width: 40%;
        margin: 0 auto;
      }
    }
  }
}
</style>

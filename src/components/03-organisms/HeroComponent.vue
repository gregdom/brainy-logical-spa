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
  background: rgba($color-branding, 0.2);

  .wrapper {
    width: calc(100% - 48px);
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: calc(1.525rem + 3.3vw);
      font-weight: 700;
      line-height: 1.4;
      text-align: center;
      margin-bottom: 27px;
    }

    h2 {
      font-size: 1rem;
      font-weight: normal;
      line-height: 1.9rem;
      text-align: center;
      margin-bottom: 37px;
    }

    & > * {
      margin-bottom: 37px;
    }

    & > *:last-child {
      margin-bottom: 0;
    }
  }
}
</style>

<template>
  <section class="hero">
    <div class="wrapper">
      <h1>Nós Criamos Soluções Para Impulsionar Sua Presença Online</h1>
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
  padding: 32px 0;
  background: rgba($color-branding, 0.2);

  .wrapper {
    width: calc(100% - 48px);
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 1.8rem;
      text-align: center;
    }

    h2 {
      font-size: 1.1rem;
      font-weight: normal;
      text-align: center;
    }

    & > * {
      margin-bottom: 32px;
    }

    & > *:last-child {
      margin-bottom: 0;
    }
  }
}
</style>

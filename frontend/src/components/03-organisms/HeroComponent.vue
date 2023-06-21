<template>
  <section class="section home-hero">
    <div class="container-default">
      <div class="home-hero-content">
        <div class="subtitle">Development Agency</div>
        <h1>{{ titleHero }}</h1>
        <p class="paragraph home-hero">{{ subTitleHero }}</p>

        <div class="buttons-wrapper">
          <button-primary link="/contact" buttonText="Contato" />
          <button-secondary link="/services" buttonText="Nossos Serviços" />
        </div>
      </div>

      <img src="image.png" alt="Image" />
    </div>
  </section>
</template>

<script>
import { ButtonPrimary, ButtonSecondary } from '../01-atoms'

export default {
  name: 'HeroComponent',
  components: { ButtonPrimary, ButtonSecondary },
  props: {
    titleHero: {
      type: String,
      required: true,
    },
    subTitleHero: {
      type: String,
      required: true,
    },
  },
  methods: {},
}
</script>

<style lang="scss">
.hero {
  width: 100%;
  max-width: 1400px;
  height: auto;
  margin: 0 auto;
  padding: 137px 0 64px 0;
  background: $color-branding-gradient;

  .wrapper {
    width: calc(100% - 48px);
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 32px;
      font-size: calc(1.525rem + 3.3vw);
      font-weight: 700;
      text-align: center;
      text-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
      color: #fff;
    }

    h2 {
      font-size: 1rem;
      font-weight: 400;
      line-height: $general-line-height;
      text-align: center;
      margin-bottom: 37px;
      color: #ffffff;
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
    padding: 137px 0 84px 0;

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
      width: 680px;

      .call-to-action {
        width: 40%;
        margin: 0 auto;
      }
    }
  }
}
</style>

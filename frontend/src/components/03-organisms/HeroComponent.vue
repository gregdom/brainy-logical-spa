<template>
  <section class="section home-hero">
    <div class="container-default">
      <div class="home-hero-content">
        <div class="subtitle">Somos a Brainy</div>
        <h1>{{ titleHero }}</h1>
        <p class="paragraph home-hero">{{ descHero }}</p>

        <div class="buttons-wrapper">
          <button-primary link="/contact" buttonText="Fale Conosco" />
          <div class="inner-space"></div>
          <button-secondary link="/services" buttonText="Nossos Serviços" />
        </div>
      </div>

      <div class="home-hero-image">
        <img src="https://placehold.co/600x500" alt="Image" />
      </div>
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
    descHero: {
      type: String,
      required: true,
    },
  },
  methods: {},
}
</script>

<style lang="scss">
.home-hero {
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 40px;

  .container-default {
    max-width: 1257px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    flex-direction: column;

    .home-hero-content {
      max-width: 575px;
      margin-bottom: 20px;

      div.subtitle {
        margin-bottom: 8px;
        font-size: 20px;
        font-weight: 500;
        letter-spacing: -0.02em;
        line-height: 1em;
        color: $color-branding;
      }

      h1 {
        margin-top: 0px;
        margin-bottom: 20px;
        font-size: 28px;
        line-height: 1.291em;
        font-weight: 900;
        letter-spacing: -0.02em;
        text-shadow: 0 3px 6px rgba(39, 99, 228, 0.11);
        color: #070721;
      }

      p.paragraph.home-hero {
        max-width: none;
        margin-bottom: 30px;
        padding: 0;
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.687em;
        letter-spacing: -0.01em;
        color: #46526b;
      }

      .buttons-wrapper {
        display: flex;
        flex-direction: column;

        .inner-space {
          width: 27px;
          height: 20px;
        }
      }
    }

    .home-hero-image {
      img {
        width: 100%;
      }
    }
  }
}

@media screen and (min-width: 480px) {
  .home-hero {
    padding-top: 40px;
    padding-bottom: 40px;

    .container-default {
      padding-left: 24px;
      padding-right: 24px;

      .home-hero-content {
        div.subtitle {
          margin-bottom: 10px;
        }

        h1 {
          font-size: 33px;
        }

        .buttons-wrapper {
          display: flex;
          flex-direction: row;

          .inner-space {
            width: 27px;
            height: 20px;
          }
        }
      }

      .home-hero-image {
        img {
          width: 100%;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .home-hero {
    padding-top: 60px;
    padding-bottom: 60px;

    .container-default {
      .home-hero-content {
        margin-bottom: 20px;
        max-width: 480px;

        div.subtitle {
          margin-bottom: 16px;
        }

        h1 {
          font-size: 40px;
        }

        p.paragraph.home-hero {
          max-width: none;
          margin-bottom: 39px;
        }
      }

      .home-hero-image {
        img {
          width: 100%;
        }
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .home-hero {
    padding-top: 68px;
    padding-bottom: 80px;

    .container-default {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .home-hero-content {
        margin-bottom: 20px;

        div.subtitle {
          margin-bottom: 16px;
        }

        h1 {
          font-size: 48px;
        }
      }

      .home-hero-image {
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>

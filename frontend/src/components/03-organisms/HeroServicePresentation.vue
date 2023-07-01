<template>
  <section class="section service-presentation-hero">
    <div class="container-default">
      <div class="service-presentation-hero-content">
        <div class="subtitle">{{ heroContent.subtitleH }}</div>
        <h1>{{ heroContent.titleH }}</h1>
        <p class="paragraph service-presentation-hero">
          {{ heroContent.descriptionH }}
        </p>

        <div class="buttons-wrapper">
          <button-primary link="/contact" buttonText="Fale Conosco" />
          <div class="inner-space"></div>
          <button-secondary link="/services" buttonText="Nossos Serviços" />
        </div>
      </div>

      <div class="service-presentation-hero-image">
        <img :src="imageSrc" alt="Icon" />
      </div>
    </div>
  </section>
</template>

<script>
import { ButtonPrimary, ButtonSecondary } from '../01-atoms'

export default {
  name: 'HeroServicePresentation',
  components: { ButtonPrimary, ButtonSecondary },

  props: {
    heroContent: {
      type: Object,
      required: true,
    },
  },

  computed: {
    imageSrc() {
      return require(`../../assets/images/${this.heroContent.pathH}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.service-presentation-hero {
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 40px;
  background: $color-branding-extra-dark;

  .container-default {
    max-width: 1257px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    flex-direction: column;

    .service-presentation-hero-content {
      width: 100%;
      max-width: 754px;
      margin-bottom: 20px;

      div.subtitle {
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: 500;
        letter-spacing: -0.02em;
        line-height: 1em;
        color: $color-general-headers-bgdark;
      }

      h1 {
        margin-top: 0px;
        margin-bottom: 20px;
        font-size: 28px;
        line-height: 1.291em;
        font-weight: 900;
        letter-spacing: -0.02em;
        text-shadow: 0 3px 6px rgba(39, 99, 228, 0.11);
        color: $color-general-headers-bgdark;
      }

      p.paragraph.service-presentation-hero {
        max-width: none;
        margin-bottom: 30px;
        padding: 0;
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.687em;
        letter-spacing: -0.01em;
        color: $color-general-text-bgdark;
      }

      .buttons-wrapper {
        display: flex;
        flex-direction: column;

        .inner-space {
          width: 27px;
          height: 20px;
        }

        a.button-secondary {
          color: $color-general-headers-bgdark;
          border-color: $color-general-headers-bgdark;

          &:hover {
            border-color: $color-branding;
          }
        }
      }
    }

    .service-presentation-hero-image {
      img {
        width: 100%;
        max-width: 500px;
        display: block;
        margin: 0 auto;
      }
    }
  }
}

@media screen and (min-width: 480px) {
  .service-presentation-hero {
    padding-top: 40px;
    padding-bottom: 40px;

    .container-default {
      padding-left: 24px;
      padding-right: 24px;

      .service-presentation-hero-content {
        div.subtitle {
          margin-bottom: 20px;
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

      .service-presentation-hero-image {
        img {
          width: 100%;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .service-presentation-hero {
    padding-top: 60px;
    padding-bottom: 60px;

    .container-default {
      .service-presentation-hero-content {
        margin-bottom: 20px;

        div.subtitle {
          margin-bottom: 23px;
        }

        h1 {
          font-size: 40px;
        }

        p.paragraph.service-presentation-hero {
          max-width: none;
          margin-bottom: 39px;
        }
      }

      .service-presentation-hero-image {
        img {
          width: 100%;
        }
      }
    }
  }
}

@media screen and (min-width: 900px) {
  .service-presentation-hero {
    .container-default {
      display: grid;
      grid-template-columns: auto auto;
      justify-content: space-between;

      .service-presentation-hero-content {
        width: 100%;

        h1 {
          font-size: 40px;
        }
      }

      .service-presentation-hero-image {
        width: 100%;
        display: flex;
        justify-content: flex-end;

        img {
          width: 420px;
          margin-top: 0;
          display: block;
        }
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .service-presentation-hero {
    padding-top: 120px;
    padding-bottom: 50px;

    .container-default {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: space-between;

      .service-presentation-hero-content {
        width: 100%;
        margin-bottom: 20px;
        overflow: unset;

        div.subtitle {
          margin-bottom: 16px;
        }

        h1 {
          font-size: 48px;
        }
      }

      .service-presentation-hero-image {
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          width: 100%;
          margin-top: 0;
          margin-right: 0;
        }
      }
    }
  }
}
</style>

<template>
  <section class="section hero-about-us">
    <div class="container-default">
      <div class="hero-about-us-content">
        <div class="subtitle">About Us</div>
        <h1>{{ titleHero }}</h1>

        <div class="buttons-wrapper">
          <button-primary link="/contact" buttonText="Fale Conosco" />
          <div class="inner-space"></div>
          <button-secondary link="/services" buttonText="Nossos Serviços" />
        </div>
      </div>

      <div class="hero-about-us-desc">
        <p class="paragraph hero-about-us">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, orci
          eget nec cursus in maecenas. Interdum enim, consectetur erat morbi
          volutpat. Cras feugiat amet rutrum proin pharetra ac aliquet turpis
          sapien lorem ipsum dolor is amet.
        </p>
        <p class="paragraph hero-about-us">
          Accumsan consectetur et orci, id placerat rutrum. Sagittis at eu
          posuere arcu lectus. Tortor augue et ullamcorper lacus cursus tellus
          tellus consectetur mauris. Nisi et nibh bibendum blandit. Nullam nisi
          egestas lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { ButtonPrimary, ButtonSecondary } from '../01-atoms'

export default {
  name: 'HeroAbout',
  components: { ButtonPrimary, ButtonSecondary },
  props: {
    titleHero: {
      type: String,
      required: true,
    },
  },
  methods: {},
}
</script>

<style lang="scss">
.hero-about-us {
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 60px;

  .container-default {
    max-width: 1257px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    flex-direction: column;

    .hero-about-us-content {
      margin-bottom: 30px;

      div.subtitle {
        margin-bottom: 8px;
        font-size: 20px;
        font-weight: 500;
        letter-spacing: -0.02em;
        line-height: 1em;
        color: $color-branding;
      }

      h1 {
        padding-right: 24px;
        margin-top: 0px;
        margin-bottom: 20px;
        font-size: 28px;
        line-height: 1.291em;
        font-weight: 900;
        letter-spacing: -0.02em;
        text-shadow: 0 3px 6px rgba(39, 99, 228, 0.11);
        color: #071221;
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

    .hero-about-us-desc {
      p.paragraph.hero-about-us {
        max-width: none;
        margin-bottom: 30px;
        padding: 0;
        font-size: 18px;
        font-weight: 500;
        line-height: 32px;
        letter-spacing: -0.01em;
        color: #46526b;
      }
    }
  }
}

@media screen and (min-width: 480px) {
  .hero-about-us {
    padding-top: 40px;
    padding-bottom: 60px;

    .container-default {
      padding-left: 24px;
      padding-right: 24px;

      .hero-about-us-content {
        max-width: 553px;

        div.subtitle {
          margin-bottom: 10px;
        }

        h1 {
          margin-bottom: 30px;
          padding-right: 40px;
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

      .hero-about-us-desc {
        margin-top: 30px;

        p.paragraph.hero-about-us {
          font-size: 17px;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .hero-about-us {
    padding-top: 60px;
    padding-bottom: 80px;

    .container-default {
      .hero-about-us-content {
        margin-bottom: 20px;

        div.subtitle {
          margin-bottom: 16px;
        }

        h1 {
          margin-bottom: 40px;
          padding-right: 0;
          font-size: 40px;
        }
      }

      .hero-about-us-desc {
        p.paragraph.hero-about-us {
          font-size: 17px;
          line-height: 1.7em;
        }
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .hero-about-us {
    padding-top: 94px;
    padding-bottom: 100px;

    .container-default {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: space-between;

      .hero-about-us-content {
        max-width: 553px;
        margin-bottom: 20px;
        overflow: unset;

        div.subtitle {
          margin-bottom: 16px;
        }

        h1 {
          margin-bottom: 49px;
          font-size: 48px;
          letter-spacing: -0.03em;
        }
      }

      .hero-about-us-desc {
        margin-top: 0;
        margin-bottom: 0;

        p.paragraph.hero-about-us {
          padding-left: 24px;
        }
      }
    }
  }
}
</style>

<template>
  <section class="section service-presentation-hero">
    <div class="container-default">
      <div class="service-presentation-hero-content">
        <div class="subtitle">Jobs</div>
        <h1>How we ran a video marketing campaign for Webflow</h1>
        <p class="paragraph service-presentation-hero">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non dolor
          urna, ullamcorper feugiat elementum non et tortor. Dignissim eu
          faucibus et, congue.
        </p>

        <!-- <div class="buttons-wrapper">
          <button-primary link="/contact" buttonText="Fale Conosco" />
          <div class="inner-space"></div>
          <button-secondary link="/services" buttonText="Nossos Serviços" />
        </div> -->
      </div>

      <div class="service-presentation-hero-image">
        <img
          src="../../../assets/images/static-website-cuate.svg"
          alt="Image"
        />
      </div>
    </div>
  </section>
</template>

<script>
import {} from '../../01-atoms'

export default {
  name: 'ServicePresentation',
  components: {},
  // props: {
  //   titleHero: {
  //     type: String,
  //     required: true,
  //   },
  //   descHero: {
  //     type: String,
  //     required: true,
  //   },
  // },
  methods: {},
}
</script>

<style lang="scss">
.service-presentation-hero {
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 40px;
  background: darken($color-branding, 40%);

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
      margin-bottom: 20px;

      div.subtitle {
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: 500;
        letter-spacing: -0.02em;
        line-height: 1em;
        color: #9daed5;
      }

      h1 {
        margin-top: 0px;
        margin-bottom: 20px;
        font-size: 28px;
        line-height: 1.291em;
        font-weight: 900;
        letter-spacing: -0.02em;
        text-shadow: 0 3px 6px rgba(39, 99, 228, 0.11);
        color: #fafafd;
      }

      p.paragraph.service-presentation-hero {
        max-width: none;
        margin-bottom: 30px;
        padding: 0;
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.687em;
        letter-spacing: -0.01em;
        color: #9daed5;
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

    .service-presentation-hero-image {
      img {
        width: 100%;
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
        overflow: hidden;
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
    padding-top: 94px;
    padding-bottom: 50px;

    .container-default {
      display: grid;
      grid-template-columns: 520px auto;
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
        justify-content: flex-end;

        img {
          width: 700px;
          margin-top: -30px;
          margin-right: -40px;
          display: block;
        }
      }
    }
  }
}
</style>

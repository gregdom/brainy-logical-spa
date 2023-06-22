<template>
  <section class="section home-about">
    <div class="container-default">
      <div class="home-about-content">
        <div class="subtitle">About Us</div>
        <h2>We are a team of talented and passionate developers.</h2>
        <p class="paragraph-home-about">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan
          mauris vestibulum arcu a. Nibh lorem blandit commodo blandit. Tortor,
          odio ipsum sapien, faucibus ut scelerisque vel in morbi. Cras orci
          fringilla velit non ac tempor. Aliquet urna diam non enim.
          Pellentesque non sed mattis cum neque.
        </p>

        <div class="buttons-wrapper">
          <button-primary link="/contact" buttonText="Fale Conosco" />
          <div class="inner-space"></div>
          <button-secondary link="/services" buttonText="Nossos Serviços" />
        </div>
      </div>

      <div class="home-about-image">
        <img src="../../assets/images/about.jpg" alt="Image" />
      </div>
    </div>
  </section>
</template>

<script>
import { ButtonPrimary, ButtonSecondary } from '../01-atoms'
// import DOMPurify from 'dompurify'
// import { mapState } from 'vuex'

export default {
  name: 'AboutComponent',
  components: { ButtonPrimary, ButtonSecondary },
  // computed: {
  //   ...mapState(['about']),
  //   text() {
  //     if (this.about.length > 0) {
  //       return DOMPurify.sanitize(this.about[0].description)
  //     }
  //     return ''
  //   },
  //   imageSrc() {
  //     if (this.about.length > 0) {
  //       return require(`../../assets/images/${this.about[0].path}`)
  //     }
  //     return ''
  //   },
  // },
  methods: {},
}
</script>

<style lang="scss">
.home-about {
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 80px;
  background: darken($color-branding, 40%);

  .container-default {
    max-width: 1257px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    flex-direction: column;

    .home-about-content {
      width: 100%;
      max-width: 575px;
      margin-bottom: 20px;

      div.subtitle {
        margin-bottom: 8px;
        font-size: 20px;
        font-weight: 500;
        letter-spacing: -0.02em;
        line-height: 1em;
        color: #cecddd;
      }

      h2 {
        margin-top: 0px;
        margin-bottom: 25px;
        font-size: 26px;
        line-height: 1.368em;
        font-weight: 900;
        letter-spacing: -0.02em;
        text-shadow: 0 3px 6px rgba(39, 99, 228, 0.11);
        color: #fafafa;
      }

      p.paragraph-home-about {
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

        a.button-secondary {
          color: #fafafa;
          border-color: #fafafa;

          &:hover {
            border-color: $color-branding;
          }
        }
      }
    }

    .home-about-image {
      margin-top: 10px;

      img {
        width: 100%;
        border-radius: 20px;
      }
    }
  }
}

@media screen and (min-width: 480px) {
  .home-about {
    padding-top: 100px;
    padding-bottom: 100px;

    .container-default {
      padding-left: 24px;
      padding-right: 24px;

      .home-about-content {
        div.subtitle {
          margin-bottom: 10px;
        }

        h2 {
          font-size: 31px;
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

      .home-about-image {
        img {
          width: 100%;
          margin-top: 20px;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .home-about {
    padding-top: 120px;
    padding-bottom: 120px;

    .container-default {
      display: flex;
      flex-direction: column;
      align-items: center;

      .home-about-content {
        margin-bottom: 20px;

        div.subtitle {
          margin-bottom: 16px;
          text-align: center;
        }

        h2 {
          font-size: 38px;
          text-align: center;
        }

        p.paragraph-home-about {
          max-width: none;
          margin-bottom: 39px;
          text-align: center;
        }

        .buttons-wrapper {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
      }

      .home-about-image {
        img {
          margin-top: 35px;
          width: 700px;
        }
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .home-about {
    padding-top: 160px;
    padding-bottom: 160px;

    .container-default {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;

      .home-about-content {
        width: 100%;
        margin-bottom: 20px;
        overflow: unset;

        div.subtitle {
          text-align: left;
        }

        h2 {
          text-align: left;
        }

        p.paragraph-home-about {
          text-align: left;
        }

        .buttons-wrapper {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
        }
      }

      .home-about-image {
        margin-right: 40px;

        img {
          margin: 0;
          width: 100%;
          border-radius: 40px;
        }
      }
    }
  }
}
</style>

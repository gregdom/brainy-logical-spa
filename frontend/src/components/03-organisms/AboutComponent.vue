<template>
  <section class="section home-about">
    <div class="wrapper">
      <h3>Sobre Nós</h3>

      <div class="blocks">
        <div class="block decoration">
          <img :src="imageSrc" alt="Ilustração" />
        </div>

        <div class="block description" v-html="text"></div>
      </div>
    </div>
  </section>
</template>

<script>
import DOMPurify from 'dompurify'
import { mapState } from 'vuex'

export default {
  components: {},
  computed: {
    ...mapState(['about']),
    text() {
      if (this.about.length > 0) {
        return DOMPurify.sanitize(this.about[0].description)
      }
      return ''
    },
    imageSrc() {
      if (this.about.length > 0) {
        return require(`../../assets/images/${this.about[0].path}`)
      }
      return ''
    },
  },
  methods: {},
}
</script>

<style lang="scss">
.about {
  width: 100%;
  max-width: 1400px;
  height: auto;
  margin: 0 auto;
  padding: 64px 0 64px 0;
  background: darken($color-branding, 30%);

  .wrapper {
    position: relative;
    width: calc(100% - 48px);
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title-parallax {
      display: none;
    }

    h3 {
      margin-bottom: 64px;
      font-size: $section-title-size;
      text-align: center;
      color: $color-text-light;
      border-bottom: 3px solid $color-highlight;
    }

    .blocks {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .decoration {
        margin-bottom: 20px;

        img {
          width: 100%;
        }
      }

      .description p {
        margin-bottom: 20px;
        font-size: $font-size-base;
        line-height: $general-line-height;
        color: $color-text-light;
      }
    }
  }
}

@media (min-width: 600px) {
  .about {
    .wrapper {
      width: 500px;
    }
  }
}

@media (min-width: 768px) {
  .about {
    .wrapper {
      width: 90%;
      max-width: 940px;

      .blocks {
        display: flex;
        flex-direction: row;

        & > * {
          width: 50%;
          margin-right: 20px;
        }

        .decoration img {
          width: 100%;
          max-width: 458px;
        }
      }
    }
  }
}

@media (min-width: 1171px) {
  .about {
    position: relative;

    .wrapper {
      position: static;

      .title-parallax.dark {
        color: rgba(0, 11, 50, 0.06);
      }
      .title-parallax {
        display: block;
        text-shadow: none;
        pointer-events: none;
        position: absolute;
        width: 100%;
        -webkit-transition: top 1s linear;
        transition: top 1s linear;
        z-index: 1;
        top: -25%;

        p {
          display: block;
          font-size: 370px;
          text-transform: uppercase;
          text-align: center;
          font-family: BebasNeue, Helvetica, Arial, sans-serif;
          font-weight: 700;
          z-index: 0;
        }
      }
    }
  }
}
</style>

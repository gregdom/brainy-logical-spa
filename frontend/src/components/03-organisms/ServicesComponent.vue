<template>
  <section class="section home-services">
    <div class="container-default">
      <div class="top">
        <div class="subtitle">Nossos Serviços</div>
        <h2>{{ titleServices }}</h2>
      </div>

      <div class="slide-services">
        <div class="block-services">
          <card-service
            class="block-cards"
            v-for="(service, index) in services"
            :key="index"
            :icon="service.icon"
            :title="service.title"
            :description_short="service.description_short"
            :link="service.link"
            :name="service.name"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {} from '../01-atoms'
import { CardService } from '../02-molecules'

export default {
  name: 'HeroComponent',
  components: { CardService },

  props: {
    titleServices: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      services: [
        {
          icon: 'puzzle-64.png',
          title: 'Extensão para Browsers',
          description_short:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id integer ut faucibus sem risus. Praesent sagittis, ut diam diam odio faucibus lorem. Sollicitudin faucibus.',
          link: 'link',
          name: 'extension',
        },
        {
          icon: 'website-statistics-64.png',
          title: 'Criação de Sites',
          description_short:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id integer ut faucibus sem risus. Praesent sagittis, ut diam diam odio faucibus lorem. Sollicitudin faucibus.',
          link: 'link',
          name: 'sites',
        },
        {
          icon: 'landing-page-64-black.png',
          title: 'Landing Pages',
          description_short:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id integer ut faucibus sem risus. Praesent sagittis, ut diam diam odio faucibus lorem. Sollicitudin faucibus.',
          link: 'link',
          name: 'landing-pages',
        },
      ],
    }
  },

  methods: {},
}
</script>

<style lang="scss">
.home-services {
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

    .top {
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

      h2 {
        margin-top: 0px;
        margin-bottom: 25px;
        font-size: 28px;
        line-height: 1.291em;
        font-weight: 900;
        letter-spacing: -0.02em;
        text-shadow: 0 3px 6px rgba(39, 99, 228, 0.11);
        color: #070721;
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
      display: grid;
      grid-template-columns: 480px auto;
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
        display: flex;
        justify-content: flex-end;

        img {
          width: 700px;
          margin-top: -30px;
          display: block;
        }
      }
    }
  }
}
</style>

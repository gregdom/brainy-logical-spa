<template>
  <section class="section home-projects">
    <div class="container-default">
      <div class="top">
        <div class="subtitle">Portfólio</div>

        <div class="main-title">
          <h2>Confira projetos recentes que amamos construir</h2>
        </div>
      </div>

      <div class="blocks">
        <card-project
          class="block-cards"
          v-for="(project, index) in projectsArr"
          :key="index"
          :image="project.path"
          :title="project.title"
          :link="project.link"
          :description="project.description"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { CardProject } from '../02-molecules'

// Vuex
import { mapState } from 'vuex'

export default {
  name: 'ProjectsComponent',
  components: { CardProject },

  computed: {
    ...mapState({
      projectsArr: (state) => state.data.portfolio.slice(0, 2),
    }),
  },

  data() {
    return {
      // projectsArr: [
      //   {
      //     path: 'gamestore-projects-brainy-logical.png',
      //     title: 'GameStore',
      //     link: '/projects/gamestore',
      //     description:
      //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non dolor urna, ullamcorper feugiat elementum non et tortor. Dignissim eu faucibus et, congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non dolor urna, ullamcorper feugiat elementum non et tortor. Dignissim eu faucibus et, congue.',
      //   },
      //   {
      //     path: 'blog-santa-catarina-projects-brainy-logical.png',
      //     title: 'SCViagens',
      //     link: '/projects/scviagens',
      //     description:
      //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non dolor urna, ullamcorper feugiat elementum non et tortor. Dignissim eu faucibus et, congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non dolor urna, ullamcorper feugiat elementum non et tortor. Dignissim eu faucibus et, congue.',
      //   },
      // ],
    }
  },
}
</script>

<style lang="scss" scoped>
.home-projects {
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 80px;

  .container-default {
    max-width: 1257px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 16px;
    padding-right: 16px;

    .top {
      margin-bottom: 20px;

      div.subtitle {
        margin-bottom: 8px;
        font-size: 20px;
        font-weight: 500;
        letter-spacing: -0.02em;
        line-height: 1em;
        color: $color-branding;
      }

      .main-title {
        width: 100%;
        max-width: 630px;

        h2 {
          font-size: 26px;
          line-height: 1.368em;
          font-weight: 800;
          letter-spacing: -0.02em;
          text-shadow: 0 3px 6px rgba(39, 99, 228, 0.11);
          color: $color-general-headers;
        }
      }
    }

    .blocks {
      .block-cards {
        margin-bottom: 30px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}

@media screen and (min-width: 480px) {
  .home-projects {
    padding-top: 100px;
    padding-bottom: 100px;

    .container-default {
      padding-left: 24px;
      padding-right: 24px;

      .top {
        margin-bottom: 20px;

        div.subtitle {
          margin-bottom: 10px;
        }

        .main-title {
          h2 {
            font-size: 31px;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .home-projects {
    padding-top: 120px;
    padding-bottom: 120px;

    .container-default {
      .top {
        div.subtitle {
          margin-bottom: 10px;
        }

        .main-title {
          h2 {
            font-size: 38px;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .home-projects {
    padding-top: 160px;
    padding-bottom: 160px;

    .container-default {
      .top {
        margin-bottom: 50px;

        div.subtitle {
          margin-bottom: 16px;
          text-align: center;
        }

        .main-title {
          margin: 0 auto;

          h2 {
            text-align: center;
          }
        }
      }
    }
  }
}
</style>

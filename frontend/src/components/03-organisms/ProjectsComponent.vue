<template>
  <section class="section home-projects">
    <div class="container-default">
      <div class="top">
        <div class="subtitle">Projetos Recentes</div>
        <h2>Discover how we had helped world class companies in the past</h2>
      </div>

      <div class="blocks">
        <card-project
          class="block-cards"
          v-for="(project, index) in projectsArr"
          :key="index"
          :image="project.path"
          :title="project.title"
          :description="project.description"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { CardProject } from '../02-molecules'
// import { mapState } from 'vuex'

export default {
  name: 'ProjectsComponent',
  components: { CardProject },
  // computed: {
  //   ...mapState(['projects']),
  //   projectsArr() {
  //     if (this.projects.length > 0) {
  //       return this.projects.slice(0, 4)
  //     }
  //     return ''
  //   },
  // },

  data() {
    return {
      projectsArr: [
        {
          path: 'gamestore-projects-brainy-logical.png',
          title: 'GameStore',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non dolor urna, ullamcorper feugiat elementum non et tortor. Dignissim eu faucibus et, congue.',
        },
        {
          path: 'blog-santa-catarina-projects-brainy-logical.png',
          title: 'SCViagens',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non dolor urna, ullamcorper feugiat elementum non et tortor. Dignissim eu faucibus et, congue.',
        },
      ],
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
        font-size: 26px;
        line-height: 1.368em;
        font-weight: 800;
        letter-spacing: -0.02em;
        text-shadow: 0 3px 6px rgba(39, 99, 228, 0.11);
        color: #071221;
      }
    }

    .blocks {
      .block-cards {
        img {
          width: 100%;
          max-width: 460px;
        }
      }
    }
  }
}

@media screen and (min-width: 480px) {
  .home-projects {
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding-top: 30px;
    padding-bottom: 40px;

    .container-default {
      padding-left: 24px;
      padding-right: 24px;

      .top {
        max-width: 575px;
        margin-bottom: 20px;

        div.subtitle {
          margin-bottom: 10px;
        }

        h2 {
          font-size: 31px;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .home-services {
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding-top: 30px;
    padding-bottom: 60px;

    .container-default {
      .top {
        max-width: 575px;
        margin-bottom: 20px;

        div.subtitle {
          margin-bottom: 16px;
        }

        h2 {
          font-size: 38px;
        }
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .home-services {
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding-top: 30px;
    padding-bottom: 130px;

    .container-default {
      .top {
        max-width: 575px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>

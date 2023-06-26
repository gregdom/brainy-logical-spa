<template>
  <div>
    <header-component />
    <divider-horizontal />

    <main>
      <projects-component />
    </main>

    <footer-component />
  </div>
</template>

<script>
import { DividerHorizontal } from '../01-atoms'
import {
  HeaderComponent,
  ProjectsComponent,
  FooterComponent,
} from '../03-organisms'

export default {
  name: 'ProjectsTemplate',
  components: {
    DividerHorizontal,
    HeaderComponent,
    ProjectsComponent,
    FooterComponent,
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 992px) {
  .home-projects {
    padding-top: 110px;
    padding-bottom: 160px;

    // .container-default {
    //   .top {
    //     margin-bottom: 50px;

    //     div.subtitle {
    //       margin-bottom: 16px;
    //       text-align: center;
    //     }

    //     .main-title {
    //       margin: 0 auto;

    //       h2 {
    //         text-align: center;
    //       }
    //     }
    //   }
    // }
  }
}
</style>

<template>
  <div>
    <header-component />

    <main>
      <projects-component />
    </main>

    <footer-component />
  </div>
</template>

<script>
import {
  HeaderComponent,
  ProjectsComponent,
  FooterComponent,
} from '../03-organisms'

export default {
  name: 'ProjectsTemplate',
  components: {
    HeaderComponent,
    ProjectsComponent,
    FooterComponent,
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
.projects {
  padding-bottom: 100px;
}

.footer {
  margin-top: 0;
}
</style>

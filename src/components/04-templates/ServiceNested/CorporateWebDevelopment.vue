<template>
  <header-component />
  <hero-component
    titleHero="Sites Empresariais"
    subTitleHero="O site que a sua empresa precisa para estar na internet"
  />
  <div>
    <h1>Corporate</h1>
  </div>
  <footer-component />
</template>

<script>
import {
  HeaderComponent,
  HeroComponent,
  FooterComponent,
} from '../../03-organisms'

export default {
  components: { HeaderComponent, HeroComponent, FooterComponent },
  computed: {
    service() {
      // Obter o nome do serviço a partir da propriedade `params`
      const serviceName = this.$route.params.service

      // Obter as informações do serviço a partir do Vuex ou outra fonte de dados
      const service = this.$store.state.services.find(
        (service) => service.link === serviceName
      )

      return service
    },
  },
}
</script>

<style lang="scss" scoped></style>

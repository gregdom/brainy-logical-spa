<template>
  <div>
    <h1>Startup</h1>
  </div>
</template>

<script>
export default {
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

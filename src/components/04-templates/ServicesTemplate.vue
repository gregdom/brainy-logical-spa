<template>
  <div>
    <header-component />
    <div v-if="service">
      <h1>{{ service.title }}</h1>
      <p>{{ service.description }}</p>
    </div>
    <div v-else>
      <p>Serviço não encontrado</p>
    </div>
    <footer-component />
  </div>
</template>

<script>
import { HeaderComponent, FooterComponent } from '../03-organisms'

export default {
  components: { HeaderComponent, FooterComponent },
  computed: {
    service() {
      return this.$store.getters.getService(this.$route.params.serviceName)
    },
  },
}
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <header-component />
    <hero-component
      :titleHero="service.title"
      :subTitleHero="service.shortDescription"
    />
    <main>
      <h1>{{ service.title }}</h1>
      <p>{{ service.longText }}</p>
    </main>
    <footer-component />
  </div>
</template>

<script>
import {
  HeaderComponent,
  HeroComponent,
  FooterComponent,
} from '../../03-organisms'

export default {
  components: { HeaderComponent, HeroComponent, FooterComponent },
  props: {
    serviceName: {
      type: String,
      required: true,
    },
  },
  computed: {
    service() {
      return this.$store.getters.getServiceByLink(this.serviceName)
    },
  },
  mounted() {
    let callToAction = document.querySelector('.call-to-action')
    callToAction.style.display = 'none'
  },
}
</script>

<style lang="scss" scoped>
.call-to-action {
  display: none;
}
</style>

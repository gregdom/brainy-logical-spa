<template>
  <div>
    <header-component />
    <main>
      <hero-component />
      <services-component />
      <about-component />
    </main>
  </div>
</template>

<script>
import {
  HeaderComponent,
  HeroComponent,
  ServicesComponent,
  AboutComponent,
} from '../03-organisms'

export default {
  components: {
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    AboutComponent,
  },
}
</script>

<style lang="scss" scoped></style>

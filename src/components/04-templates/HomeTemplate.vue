<template>
  <div>
    <header-component />
    <main>
      <hero-component />
      <services-component />
    </main>
  </div>
</template>

<script>
import {
  HeaderComponent,
  HeroComponent,
  ServicesComponent,
} from '../03-organisms'

export default {
  components: { HeaderComponent, HeroComponent, ServicesComponent },
}
</script>

<style lang="scss" scoped></style>

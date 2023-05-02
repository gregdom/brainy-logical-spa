<template>
  <div>
    <header-component />
    <main>
      <hero-component />
    </main>
  </div>
</template>

<script>
import { HeaderComponent, HeroComponent } from '../03-organisms'

export default {
  components: { HeaderComponent, HeroComponent },
}
</script>

<style lang="scss" scoped></style>

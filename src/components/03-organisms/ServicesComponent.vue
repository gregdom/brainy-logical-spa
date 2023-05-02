<template>
  <section class="services">
    <div class="wrapper">
      <h3>Serviços</h3>
    </div>
  </section>
</template>

<script>
import {} from '../01-atoms'

export default {
  components: {},
}
</script>

<style lang="scss">
.services {
  width: 100%;
  max-width: 1400px;
  height: 500px;
  margin: 0 auto;
  padding: 57px 0 64px 0;
  background: $color-light;

  .wrapper {
    width: calc(100% - 48px);
    height: auto;
    margin: 0 auto;
    flex-direction: column;
  }
}
</style>

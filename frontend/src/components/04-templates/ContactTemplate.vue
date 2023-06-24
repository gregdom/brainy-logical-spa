<template>
  <div>
    <header-component />
    <main>
      <!-- <contact-form-component mainTitle="Envie sua mensagem" /> -->
    </main>
    <footer-component />
  </div>
</template>

<script>
import { HeaderComponent, FooterComponent } from '../03-organisms'

export default {
  name: 'ContactTemplate',
  components: {
    HeaderComponent,
    FooterComponent,
  },
  mounted() {},
}
</script>

<style lang="scss" scoped></style>

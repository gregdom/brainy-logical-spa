<template>
  <router-link to="#" :text="buttonText" class="call-to-action">
    {{ text }}
  </router-link>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      text: this.buttonText,
    }
  },
}
</script>

<style lang="scss">
.call-to-action {
  width: 100%;
  height: 55px;
  padding: 0.8125rem 2rem;
  display: block;
  font-family: 'Poppins', Helvetica, sans-serif;
  font-size: 1rem;
  text-decoration: none;
  text-align: center;
  border-radius: 0.5rem;
  color: $color-text-light;
  background: $color-branding;
}
</style>

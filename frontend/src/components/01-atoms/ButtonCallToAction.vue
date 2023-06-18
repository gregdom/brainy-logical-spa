<template>
  <a :href="link" class="call-to-action">
    {{ buttonText }}
    <span class="material-symbols-outlined"> chevron_right </span>
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.call-to-action {
  width: 100%;
  height: 60px;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  border-radius: 0.5rem;
  color: $color-text-light;
  background: $color-branding;

  span {
    margin-top: 4px;
    margin-left: 0.5rem;
  }
}
</style>

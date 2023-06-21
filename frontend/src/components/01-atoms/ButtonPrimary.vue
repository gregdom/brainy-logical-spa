<template>
  <a :href="link" class="button-default button-primary">
    {{ buttonText }}
  </a>
</template>

<script>
export default {
  name: 'ButtonPrimary',
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
.button-default {
  text-decoration: none;
  display: block;
  padding: 22px 32px;
  border-radius: 10px;
  transition: transform 350ms ease, box-shadow 350ms ease,
    background-color 350ms ease, -webkit-transform 350ms ease;
  line-height: 1em;
  text-align: center;

  &.button-primary {
    font-weight: 600;
    color: #fff;
    background: $color-branding;

    &:hover {
      background: darken($color-branding, 20%);
      box-shadow: 0 0 0 0 rgba(48, 44, 255, 0.1);
      -webkit-transform: scale3d(0.95, 0.95, 1.01);
      transform: scale3d(0.95, 0.95, 1.01);
      color: #fff;
    }
  }
}
</style>

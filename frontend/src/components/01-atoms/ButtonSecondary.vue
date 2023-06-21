<template>
  <a :href="link" class="button-default button-secondary">
    {{ buttonText }}
  </a>
</template>

<script>
export default {
  name: 'ButtonSecondary',
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

  &.button-secondary {
    font-weight: 500;
    color: $color-branding;
    border: 1px solid $color-branding;
    background: transparent;

    &:hover {
      background: $color-branding;
      -webkit-transform: scale3d(0.95, 0.95, 1.01);
      transform: scale3d(0.95, 0.95, 1.01);
      color: #fff;
    }
  }
}
</style>

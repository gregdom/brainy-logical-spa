<template>
  <button :text="buttonText">
    {{ textButton }}
  </button>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>

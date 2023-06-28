<template>
  <div v-show="showLoader" class="loader" :class="{ active: showLoader }">
    <img src="../../assets/images/load.svg" alt="Icon" />
    <p>Aguarde...</p>
  </div>
</template>

<script>
export default {
  props: {
    showLoader: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.loader {
  width: fit-content;
  padding: 5px 16px 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background: $color-branding;

  img {
    margin-right: 8px;
    width: 48px;
  }

  p {
    font-size: $font-size-base;
    font-weight: 500;
    color: $color-general-headers-bgdark;
  }
}
</style>

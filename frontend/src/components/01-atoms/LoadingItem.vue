<template>
  <div v-if="showLoader" class="loader">
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
  position: fixed;
  z-index: 5000;
  bottom: -300px;
  left: 50%;
  transform: translateX(-50%);
  width: fit-content;
  padding: 5px 16px 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  animation: slideIn 0.5s ease-out forwards;
  background: $color-branding;

  @keyframes slideIn {
    from {
      bottom: -300px;
    }
    to {
      bottom: 32px;
    }
  }

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

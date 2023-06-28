<template>
  <div class="notification-status" :class="{ active: submitSituation }">
    <div class="icon">
      <span class="material-symbols-outlined"> done </span>
    </div>
    <div>
      <p class="title">Sucesso</p>
      <p>{{ submitSituation.message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    submitSituation: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.notification-status {
  position: fixed;
  z-index: 5000;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  min-width: 290px;
  max-width: 300px;
  padding: 22px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  border-left: 10px solid #4caf50;
  animation: slideIn 0.5s ease-out forwards;
  box-shadow: 0 2px 8px 0 rgba(9, 30, 54, 0.1), 0 1px 3px 0 rgba(7, 16, 33, 0.1);
  background: $color-white;

  .icon {
    width: 32px;
    height: 32px;
    margin-right: 16px;
    border-radius: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #4caf50;

    span {
      color: $color-white;
    }
  }

  p {
    font-size: 15px;
    font-weight: 500;
    color: $color-general-text-bglight;
  }

  p.title {
    margin-bottom: 8px;
    font-weight: 600;
    color: $color-general-headers;
  }
}
</style>

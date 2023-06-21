<template>
  <div class="divider">
    <div class="inner-divider"></div>
  </div>
</template>

<script>
export default {
  name: 'DividerHorizontal',
}
</script>

<style lang="scss" scoped>
.divider {
  max-width: 1257px;
  height: auto;
  padding-right: 16px;
  padding-left: 16px;

  .inner-divider {
    height: 1px;
    margin-right: auto;
    margin-left: auto;
    background-color: #cecddd;
  }
}

@media screen and (min-width: 480px) {
  .divider {
    padding-right: 24px;
    padding-left: 24px;
  }
}
</style>

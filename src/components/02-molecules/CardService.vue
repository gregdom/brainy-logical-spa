<template>
  <div class="cardService">
    <div class="iconContainer">
      <img :src="imageSrc" alt="Icon" />
    </div>

    <div class="details">
      <h4>{{ title }}</h4>

      <p>
        {{ description }}
      </p>

      <a href="#">Saiba mais</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  computed: {
    imageSrc() {
      return require(`../../assets/images/${this.icon}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.cardService {
  width: 100%;
  max-width: 300px;
  height: auto;
  background: #fff;

  h4 {
    padding: 20px 0;
    font-size: $general-title-size;
    text-align: center;
    color: $color-text-dark;
  }
}
</style>

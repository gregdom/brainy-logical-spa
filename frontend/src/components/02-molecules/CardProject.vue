<template>
  <div class="cardProject">
    <div class="imageContainer">
      <img :src="imageSrc" alt="Imagem de Projeto" />
    </div>

    <div class="details">
      <h4>{{ title }}</h4>

      <p>
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
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
      return require(`../../assets/images/${this.image}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.cardProject {
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  box-shadow: 0 8px 130px 1px rgba(0, 0, 0, 0.07);
  background: #fff;

  .imageContainer {
    width: 100%;
    height: auto;
    padding: 20px 20px 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      max-width: 460px;
    }
  }

  .details {
    width: 100%;
    height: auto;
    padding: 0 20px;

    h4 {
      padding: 20px 0 15px 0;
      font-size: $general-title-size;
      text-align: left;
      color: $color-text-dark;
    }

    p {
      padding-bottom: 20px;
      font-size: $font-size-base;
      line-height: $general-line-height;
      color: $color-general-text;
    }

    a {
      display: block;
      text-decoration: none;
      text-align: right;
      color: $color-branding;
    }
  }
}
</style>

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
  padding: 0 0 32px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 8px 130px 1px rgba(0, 0, 0, 0.07);
  background: #fff;

  .iconContainer {
    width: 100px;
    height: 100px;
    margin-top: -50px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: $color-branding;
  }

  .details {
    width: 100%;
    height: auto;
    padding: 0 20px;

    h4 {
      padding: 20px 0;
      font-size: $general-title-size;
      text-align: center;
      color: $color-text-dark;
    }

    p {
      padding-bottom: 20px;
      line-height: 1.7rem;
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

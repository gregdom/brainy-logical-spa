<template>
  <div class="cardTestimonial">
    <div class="imageContainer">
      <img :src="imageSrc" alt="Foto do cliente" />
    </div>

    <div class="details">
      <h4>{{ businessName }}</h4>

      <p>
        {{ description }}
      </p>

      <p>
        {{ clientName }}
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
    businessName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    clientName: {
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
.cardTestimonial {
  width: 100%;
  max-width: 300px;
  height: auto;
  // padding: 0 0 20px 0;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  box-shadow: 0 8px 130px 1px rgba(0, 0, 0, 0.07);
  background: #fff;

  .imageContainer {
    width: 100%;
    height: auto;
    // display: flex;
    // justify-content: center;
    // align-items: center;

    img {
      width: calc(100% - 40px);
      margin-top: 20px;
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
    }

    a {
      display: block;
      font-size: $font-size-base;
      text-align: right;
      text-decoration: none;
      color: $color-branding;
    }
  }
}
</style>

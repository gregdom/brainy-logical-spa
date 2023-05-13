<template>
  <div class="cardService">
    <div class="iconContainer">
      <img :src="imageSrc" alt="Icon" />
    </div>

    <div class="details">
      <h4>{{ title }}</h4>

      <p>
        {{ shortDescription }}
      </p>

      <router-link :to="`services/${link}`">Saiba mais</router-link>
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
    shortDescription: {
      type: String,
      required: true,
    },
    link: {
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
  height: auto;
  padding: 0 0 32px 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  // box-shadow: 0 8px 130px 1px rgba(0, 0, 0, 0.07);
  background: #fff;

  &:hover {
    color: #fff;
    background: $color-branding;
  }

  .iconContainer {
    width: 100px;
    height: 100px;
    margin: -50px auto 0 auto;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: $color-branding-gradient;

    img {
      padding: 20px;
      border-radius: 50%;
      border: 2px solid #fff;
    }
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
      font-size: $font-size-base;
      line-height: $general-line-height;
      font-weight: 400;
      color: $color-general-text;
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

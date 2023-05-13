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
  transition: 0.2s;
  background: #fff;

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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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
      width: fit-content;
      padding: 10px 16px;
      border-radius: 5px;
      display: block;
      font-size: $font-size-base;
      text-decoration: none;
      color: $color-branding;
      justify-self: flex-end;
      transition: transform 0.2s ease-in-out;
    }
  }

  &:hover {
    box-shadow: 0 12px 21px $color-branding;
    background: $color-branding;

    h4,
    p {
      color: #fff;
    }

    a {
      color: #33373b;
      background: $color-highlight;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>

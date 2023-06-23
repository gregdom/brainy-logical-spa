<template>
  <router-link class="card-project" :to="`/services/${link}`">
    <div
      :style="{ backgroundImage: 'url(' + imageSrc + ')' }"
      class="image-container"
    >
      <div class="overlay-card-project">{{ title }}</div>
    </div>

    <div class="details">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <button-secondary :link="`/services/${link}`" buttonText="Saiba mais" />
    </div>
  </router-link>
</template>

<script>
import { ButtonSecondary } from '../01-atoms'

export default {
  name: 'CardProject',
  components: { ButtonSecondary },
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
.card-project {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  align-items: center;
  text-decoration: none;
  border: 1px solid #cecdcc;
  border-radius: 23px;
  box-shadow: 0 3px 12px 0 rgba(44, 118, 255, 0.05);
  background-color: #fff;
  transition: transform 350ms ease;

  &:hover {
    -webkit-transform: scale3d(0.95, 0.95, 1.01);
    transform: scale3d(0.95, 0.95, 1.01);

    // a.button-secondary {
    //   color: #fff;
    //   background: $color-branding;
    // }
  }

  .image-container {
    position: relative;
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 23px;
    border-top-right-radius: 23px;
    overflow: hidden;
    background-size: cover;
    background-position: center;

    .overlay-card-project {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      margin-top: 0px;
      margin-bottom: 11px;
      color: #fff;
      font-size: 25px;
      line-height: 1.416em;
      font-weight: 700;
      letter-spacing: -0.02em;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba($color-branding, 0.9);
    }
  }

  .details {
    width: 100%;
    height: auto;
    padding: 20px;

    h3 {
      margin-top: 0px;
      margin-bottom: 11px;
      color: #071221;
      font-size: 20px;
      line-height: 1.416em;
      font-weight: 700;
      letter-spacing: -0.02em;
    }

    p {
      max-width: none;
      margin-bottom: 30px;
      padding: 0;
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.687em;
      letter-spacing: -0.01em;
      color: #46526b;
    }
  }
}
</style>

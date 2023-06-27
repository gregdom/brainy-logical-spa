<template>
  <router-link class="card-service" :to="`/services/${link}`">
    <div class="icon-container">
      <img :src="imageSrc" alt="Icon" />
    </div>

    <h3>{{ title }}</h3>
    <p>{{ description_short }}</p>
    <button-secondary :link="`/services/${link}`" buttonText="Saiba mais" />
  </router-link>
</template>

<script>
import { ButtonSecondary } from '../01-atoms'

export default {
  name: 'CardService',
  components: { ButtonSecondary },

  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description_short: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    name: {
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
.card-service {
  text-decoration: none;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  text-align: left;
  border: $border-default;
  border-radius: 23px;
  box-shadow: 0 3px 12px 0 rgba(44, 118, 255, 0.05);
  background-color: $color-white;
  transition: transform 350ms ease;

  &:hover {
    -webkit-transform: scale3d(0.95, 0.95, 1.01);
    transform: scale3d(0.95, 0.95, 1.01);

    a.button-secondary {
      color: $color-white;
      background: $color-branding;
    }
  }

  .icon-container {
    width: 90px;
    height: 90px;
    margin-bottom: 10px;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba($color-branding, 0.5);

    img {
      width: 70%;
    }
  }

  h3 {
    margin-top: 0px;
    margin-bottom: 11px;
    color: $color-general-headers;
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
    color: $color-general-text-bglight;
  }

  a.button-secondary {
    width: fit-content;
  }
}

@media screen and (min-width: 480px) {
  .card-service {
    .icon-container {
      width: 105px;
      height: 105px;
      margin-bottom: 20px;
    }

    h3 {
      font-size: 22px;
    }
  }
}

@media screen and (min-width: 768px) {
  .card-service {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    text-align: center;

    h3 {
      font-size: 24px;
    }

    a.button-secondary {
      width: 95%;
    }
  }
}
</style>

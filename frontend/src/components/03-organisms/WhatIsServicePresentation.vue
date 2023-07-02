<template>
  <section class="section what-is-services">
    <div class="container-default">
      <div class="top">
        <div class="subtitle">Definição</div>
        <h2>{{ serviceObject.title }}</h2>
      </div>

      <div class="bottom" v-html="serviceObject.description_long"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WhatIsServicePresentation',

  props: {
    currentRoute: {
      type: String,
      required: true,
    },
  },

  computed: {
    serviceObject() {
      return this.$store.getters.getServiceByName(
        this.getServiceNameFromRoute(this.currentRoute)
      )
    },
  },

  methods: {
    getServiceNameFromRoute(route) {
      return route.replace('/services/', '')
    },
  },
}
</script>

<style lang="scss">
.what-is-services {
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 80px;

  .container-default {
    max-width: 1257px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 16px;
    padding-right: 16px;

    .top {
      max-width: 575px;
      margin-bottom: 20px;

      div.subtitle {
        margin-bottom: 8px;
        font-size: 20px;
        font-weight: 500;
        letter-spacing: -0.02em;
        line-height: 1em;
        color: $color-branding;
      }

      h2 {
        margin-top: 0px;
        margin-bottom: 25px;
        font-size: 26px;
        line-height: 1.368em;
        font-weight: 800;
        letter-spacing: -0.02em;
        text-shadow: 0 3px 6px rgba(39, 99, 228, 0.11);
        color: $color-general-headers;
      }
    }

    .bottom {
      p {
        max-width: none;
        margin-bottom: 16px;
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.687em;
        letter-spacing: -0.01em;
        color: $color-general-text-bglight;

        &.benefits {
          margin-top: 20px;
          margin-bottom: 5px;
          font-size: 18px;
          color: $color-branding;
        }
      }

      ul {
        list-style: none;

        li {
          max-width: none;
          margin-bottom: 16px;
          padding: 0;
          font-size: 1rem;
          font-weight: 500;
          line-height: 1.687em;
          letter-spacing: -0.01em;
          color: $color-general-text-bglight;
        }
      }
    }
  }
}

@media screen and (min-width: 480px) {
  .what-is-services {
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding-top: 100px;
    padding-bottom: 100px;

    .container-default {
      padding-left: 24px;
      padding-right: 24px;

      .top {
        max-width: 575px;
        margin-bottom: 20px;

        div.subtitle {
          margin-bottom: 10px;
        }

        h2 {
          font-size: 31px;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .what-is-services {
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding-top: 120px;
    padding-bottom: 120px;

    .container-default {
      .top {
        max-width: 575px;
        margin-bottom: 20px;

        div.subtitle {
          margin-bottom: 16px;
        }

        h2 {
          font-size: 38px;
        }
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .what-is-services {
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding-top: 130px;
    padding-bottom: 120px;

    .container-default {
      .top {
        max-width: 575px;
        margin-bottom: 20px;
      }

      .bottom {
        column-count: 2;

        p {
          max-width: none;
          margin-bottom: 16px;
          padding-right: 24px;
          font-size: 1rem;
          font-weight: 500;
          line-height: 1.687em;
          letter-spacing: -0.01em;
          color: $color-general-text-bglight;
        }

        ul {
          list-style: none;
          padding-right: 24px;

          li {
            max-width: none;
            margin-bottom: 16px;
            padding: 0;
            font-size: 1rem;
            font-weight: 500;
            line-height: 1.687em;
            letter-spacing: -0.01em;
            color: $color-general-text-bglight;
          }
        }
      }
    }
  }
}
</style>

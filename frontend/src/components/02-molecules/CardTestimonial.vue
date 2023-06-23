<template>
  <div class="card-testimonial">
    <div class="card-content">
      <h3>{{ highlight }}</h3>
      <p>{{ description }}</p>
    </div>

    <div class="card-bio">
      <img :src="imageSrc" alt="Icon" />
      <div>
        <p class="name">{{ name }}</p>
        <p class="work">{{ work }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {} from '../01-atoms'

export default {
  name: 'CardTestimonial',
  components: {},

  props: {
    path: {
      type: String,
      required: true,
    },
    highlight: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    work: {
      type: String,
      required: true,
    },
  },

  computed: {
    imageSrc() {
      return require(`../../assets/images/${this.path}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.card-testimonial {
  padding: 40px 20px;
  border: 1px solid #cecddd;
  border-radius: 23px;
  box-shadow: 0 3px 12px 0 rgba(44, 118, 255, 0.05);
  background-color: #fff;
  transition: transform 350ms ease;

  .card-content {
    width: 100%;
    height: auto;

    h3 {
      margin-bottom: 16px;
      font-size: 20px;
      line-height: 1.416em;
      font-weight: 700;
      letter-spacing: -0.02em;
      color: $color-branding;
    }

    p {
      margin-bottom: 40px;
      font-size: 18px;
      font-weight: 500;
      line-height: 32px;
      letter-spacing: -0.01em;
      color: #46526b;
    }
  }

  .card-bio {
    display: flex;
    align-items: center;

    img {
      width: 68px;
      height: 68px;
      margin-right: 15px;
    }

    p.name,
    p.work {
      font-size: 1rem;
      font-weight: 500;
    }

    p.name {
      margin-bottom: 5px;
      color: #071221;
    }

    p.work {
      color: $color-branding;
    }
  }
}

@media screen and (min-width: 480px) {
  .card-testimonial {
    padding: 42px 36px;

    .card-content {
      h3 {
        font-size: 22px;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .card-testimonial {
    padding: 52px 36px;

    .card-content {
      h3 {
        font-size: 24px;
      }

      p {
        margin-bottom: 55px;
      }
    }
  }
}
</style>

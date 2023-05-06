<template>
  <section class="services" id="services">
    <div class="wrapper">
      <h3>Serviços</h3>

      <div class="block-services">
        <card-service
          class="block-cards"
          v-for="(service, index) in services"
          :key="index"
          :icon="service.icon"
          :title="service.title"
          :description="service.description"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { CardService } from '../02-molecules'

export default {
  components: { CardService },
  data() {
    return {
      services: [
        {
          icon: 'web-design-48.png',
          title: 'Web Design',
          description:
            'Design atraente e responsivo para seu site, que engaja e encanta seus clientes. Crie uma presença online forte.',
        },
        {
          icon: 'analystics-48.png',
          title: 'Landing Page',
          description:
            'Aumente suas conversões com uma Landing Page otimizada, para gerar mais leads e vendas para seu negócio.',
        },
        {
          icon: 'puzzle-48.png',
          title: 'Extensões Web',
          description:
            'Personalize sua experiência de navegação com Extensões para Chrome e Firefox, que tornam seu dia online.',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.services {
  width: 100%;
  max-width: 1400px;
  height: auto;
  margin: 0 auto;
  padding: 57px 0 64px 0;
  background: #fff;

  .wrapper {
    width: calc(100% - 48px);
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      font-size: $section-title-size;
      text-align: center;
      margin-bottom: 92px;
    }

    .block-cards {
      max-width: 300px;
      margin-bottom: 92px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

@media (min-width: 600px) {
  .services {
    .wrapper {
      width: 500px;

      .block-cards {
        max-width: inherit;
      }
    }
  }
}

@media (min-width: 768px) {
  .services {
    padding: 50px 0 64px 0;

    .wrapper {
      width: 90%;

      .block-services {
        display: flex;

        .block-cards {
          max-width: 300px;
          margin-right: 20px;
          margin-bottom: 0px !important;

          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
}
</style>

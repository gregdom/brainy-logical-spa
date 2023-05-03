<template>
  <section class="services">
    <div class="wrapper">
      <h3>Serviços</h3>

      <card-service
        class="block-cards"
        v-for="(service, index) in services"
        :key="index"
        :icon="service.icon"
        :title="service.title"
        :description="service.description"
      />
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
            'Personalize sua experiência de navegação com Extensões para Chrome e Firefox, que tornam seu dia online mais eficiente.',
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
  background: $color-light;

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
      margin-bottom: 92px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>

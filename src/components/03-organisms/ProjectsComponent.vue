<template>
  <section class="projects">
    <div class="wrapper">
      <h3>Projetos Recentes</h3>

      <card-project
        class="block-cards"
        v-for="(project, index) in projects"
        :key="index"
        :image="project.image"
        :title="project.title"
        :description="project.description"
      />
    </div>
  </section>
</template>

<script>
import { CardProject } from '../02-molecules'

export default {
  components: { CardProject },
  data() {
    return {
      projects: [
        {
          image: 'gamestore-projects-brainy-logical.png',
          title: 'GameStore',
          description:
            'Marketplace de jogos eletrônicos integrada ao sistema de pagamento Mercado Pago.',
        },
        {
          image: 'blog-santa-catarina-projects-brainy-logical.png',
          title: 'SCViagens',
          description:
            'Apresenta cidades de Santa Catarina. Possui uma agenda online para contratar guia turísticos.',
        },
        {
          image: 'cassino-da-ruiva-projects-brainy-logical.png',
          title: 'Cassino da Ruiva',
          description:
            'Site de afiliado que lista plataformas de cassino seguras e confiáveis aos visitantes.',
        },
        {
          image: 'brainy-logical-projects-brainy-logical.png',
          title: 'Brainy Logical',
          description:
            'O site foi desenvolvido com o objetivo de oferecer soluções para fortalecer sua presença online.',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.projects {
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
      padding: 0 20px 64px 20px;
    }

    .block-cards {
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>

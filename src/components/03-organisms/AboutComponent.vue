<template>
  <section class="about">
    <div class="wrapper">
      <h3>Sobre Nós</h3>

      <div class="blocks">
        <div class="block decoration">
          <img
            src="../../assets/images/illustration-about.png"
            alt="Ilustração"
          />
        </div>

        <div class="block description">
          <p>
            A Brainy Logical é uma empresa de tecnologia que se dedica a
            fornecer soluções inovadoras e de alta qualidade para empresas de
            todos os tamanhos.
          </p>

          <p>
            A empresa se destaca pela excelência em seus serviços e pela atenção
            aos detalhes em cada projeto.
          </p>

          <p>
            Com uma visão voltada para o futuro, a Brainy Logical está sempre em
            busca das mais recentes tecnologias e tendências de mercado para
            garantir que seus clientes obtenham o máximo de sucesso em seus
            negócios.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
}
</script>

<style lang="scss">
.about {
  width: 100%;
  max-width: 1400px;
  height: auto;
  margin: 0 auto;
  padding: 64px 0 64px 0;
  background: $color-branding;

  .wrapper {
    width: calc(100% - 48px);
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      margin-bottom: 64px;
      font-size: $section-title-size;
      text-align: center;
      color: $color-text-light;
    }

    .blocks {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .decoration {
        margin-bottom: 20px;

        img {
          width: 100%;
        }
      }

      .description p {
        margin-bottom: 20px;
        font-size: $root-font-size;
        line-height: 1.7rem;
        color: $color-text-light;
      }
    }
  }
}
</style>

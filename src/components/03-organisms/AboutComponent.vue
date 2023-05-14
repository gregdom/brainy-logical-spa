<template>
  <section class="about" id="about">
    <div class="wrapper">
      <h3>Sobre Nós</h3>

      <div class="blocks">
        <div class="block decoration">
          <img
            src="../../assets/images/illustration-about-2.png"
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
    position: relative;
    width: calc(100% - 48px);
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title-parallax {
      display: none;
    }

    h3 {
      margin-bottom: 64px;
      font-size: $section-title-size;
      text-align: center;
      color: $color-text-light;
      border-bottom: 3px solid $color-highlight;
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
        font-size: $font-size-base;
        line-height: $general-line-height;
        color: $color-text-light;
      }
    }
  }
}

@media (min-width: 600px) {
  .about {
    .wrapper {
      width: 500px;
    }
  }
}

@media (min-width: 768px) {
  .about {
    .wrapper {
      width: 90%;
      max-width: 940px;

      .blocks {
        display: flex;
        flex-direction: row;

        & > * {
          width: 50%;
          margin-right: 20px;
        }

        .decoration img {
          width: 100%;
          max-width: 458px;
        }
      }
    }
  }
}

@media (min-width: 1171px) {
  .about {
    position: relative;

    .wrapper {
      position: static;

      .title-parallax.dark {
        color: rgba(0, 11, 50, 0.06);
      }
      .title-parallax {
        display: block;
        text-shadow: none;
        pointer-events: none;
        position: absolute;
        width: 100%;
        -webkit-transition: top 1s linear;
        transition: top 1s linear;
        z-index: 1;
        top: -25%;

        p {
          display: block;
          font-size: 370px;
          text-transform: uppercase;
          text-align: center;
          font-family: BebasNeue, Helvetica, Arial, sans-serif;
          font-weight: 700;
          z-index: 0;
        }
      }

      // .text-wy-6460e1a96fce0::before {
      //   content: 'Sobre';
      //   font-size: 200px;
      //   transform: translate(0, -25%);
      //   animation: title-parallax-move-why-us 8s infinite both;
      // }
      // .title-parallax::before {
      //   height: auto;
      //   line-height: 1;
      //   display: block;
      //   text-transform: uppercase;
      //   text-align: center;
      //   font-family: BebasNeue, Helvetica, Arial, sans-serif;
      //   font-weight: 700;
      //   z-index: 0;
      //   width: 95%;
      //   margin: 0 auto;
      // }
    }
  }
}
</style>

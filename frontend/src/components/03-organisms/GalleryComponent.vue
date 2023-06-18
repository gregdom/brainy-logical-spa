<template>
  <section class="gallery" id="gallery">
    <div class="wrapper">
      <h3>Um Projeto Que Amamos Fazer</h3>

      <div class="blocks">
        <div class="imageGallery">
          <img
            src="../../assets/images/gamestore-servico-desenvolvimento-web.png"
            alt="Imagem do projeto"
          />
        </div>

        <div class="details">
          <h4>Loja Virtual GameStore</h4>
          <p>
            A GameStore é um marketplace de jogos online. Como uma loja virtual
            especializada na venda de jogos, oferece uma plataforma para
            empresas da área de games comercializarem seus produtos. Integrada
            ao sistema de pagamento do Mercado Pago, a GameStore proporciona
            transações seguras e confiáveis. <br />
            Além disso, conta com um sistema de cadastro de empresas, permitindo
            que elas inscrevam seus jogos na plataforma e acompanhem suas vendas
            por meio de um dashboard intuitivo. Com essa funcionalidade, as
            empresas podem gerenciar seus catálogos, monitorar o desempenho das
            vendas e obter insights valiosos para impulsionar seus negócios.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      projects: [
        {
          image: 'gamestore-projects-brainy-logical.png',
          title: 'GameStore',
          description:
            'Marketplace de jogos eletrônicos integrada ao sistema de pagamento Mercado Pago.',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.gallery {
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
      padding: 0 20px 32px 20px;
    }

    .blocks {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .imageGallery {
        img {
          width: 100%;
          max-width: 589px;
        }
      }

      .details {
        width: 100%;
        height: auto;

        h4 {
          padding: 20px 0 15px 0;
          font-size: $general-title-size;
          text-align: left;
          color: $color-text-dark;
        }

        p {
          padding-bottom: 20px;
          font-size: $font-size-base;
          line-height: $general-line-height;
          color: $color-general-text;
        }

        a {
          display: block;
          text-decoration: none;
          text-align: right;
          color: $color-branding;
        }
      }
    }
  }
}

@media (min-width: 600px) {
  .gallery {
    .wrapper {
      width: 500px;
    }
  }
}

@media (min-width: 768px) {
  .gallery {
    .wrapper {
      width: 90%;
      max-width: 940px;

      .blocks {
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;

        .details {
          padding-left: 20px;
        }
      }
    }
  }
}
</style>

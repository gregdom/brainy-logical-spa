<template>
  <section class="gallery" id="gallery">
    <div class="wrapper">
      <h3>Um Projeto Que Amamos Fazer</h3>

      <div class="blocks">
        <div class="imageGallery">
          <img
            src="../../assets/images/gamestore-servico-desenvolvimento-web.png"
            alt=""
          />
        </div>

        <div class="details">
          <h4>Loja Virtual GameStore</h4>
          <p>
            ARCO Group is a customer focussed commercial construction firm set a
            task to update their website. F5 Studio redesigned the website is by
            approaching it with customers in mind. Our specialists started with
            an analysis to create a website redesign strategy. We changed an
            information architecture of a website. Our designers created a
            modern design with improved UX. F5 Studio web developers correctly
            built a WordPress site with customizations.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import { CardProject } from '../02-molecules'

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
        // padding: 0 20px;

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

// @media (min-width: 1171px) {
//   // section
//   .gallery {
//     .wrapper {
//       width: 100%;
//       max-width: 1170px;
//       margin: 0 auto;
//       padding-left: 20px;
//       padding-right: 20px;
//     }
//   }
// }
</style>

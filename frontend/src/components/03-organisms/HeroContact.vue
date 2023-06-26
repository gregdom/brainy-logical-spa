<template>
  <section class="section contact-hero">
    <div class="container-default">
      <div class="contact-hero-content">
        <div class="subtitle">Contato</div>
        <h1>Será incrível trabalharmos juntos!</h1>
        <p class="paragraph">
          Se precisa de um projeto ou tem perguntas sobre nossos serviços, entre
          em contato pelo formulário abaixo! Se preferir, use o chat ao vivo
          para falar com um atendente.
        </p>

        <!-- <div class="buttons-wrapper">
          <button-primary link="/contact" buttonText="Fale Conosco" />
          <div class="inner-space"></div>
          <button-secondary link="/services" buttonText="Nossos Serviços" />
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroContact',
}
</script>

<style lang="scss" scoped>
.contact-hero {
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 40px;
  background: darken($color-branding, 40%);

  .container-default {
    max-width: 1257px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    flex-direction: column;

    .contact-hero-content {
      width: 100%;
      margin-bottom: 20px;

      div.subtitle {
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: 500;
        letter-spacing: -0.02em;
        line-height: 1em;
        color: #9daed5;
      }

      h1 {
        margin-top: 0px;
        margin-bottom: 20px;
        font-size: 28px;
        line-height: 1.291em;
        font-weight: 900;
        letter-spacing: -0.02em;
        text-shadow: 0 3px 6px rgba(39, 99, 228, 0.11);
        color: #fafafd;
      }

      p.paragraph {
        max-width: none;
        margin-bottom: 30px;
        padding: 0;
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.687em;
        letter-spacing: -0.01em;
        color: #9daed5;
      }

      .buttons-wrapper {
        display: flex;
        flex-direction: column;

        .inner-space {
          width: 27px;
          height: 20px;
        }
      }
    }
  }
}

@media screen and (min-width: 480px) {
  .contact-hero {
    padding-top: 40px;
    padding-bottom: 40px;

    .container-default {
      padding-left: 24px;
      padding-right: 24px;

      .contact-hero-content {
        max-width: 553px;

        div.subtitle {
          margin-bottom: 20px;
        }

        h1 {
          font-size: 33px;
        }

        .buttons-wrapper {
          display: flex;
          flex-direction: row;

          .inner-space {
            width: 27px;
            height: 20px;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .contact-hero {
    padding-top: 60px;
    padding-bottom: 60px;

    .container-default {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .contact-hero-content {
        max-width: 553px;
        margin-bottom: 20px;
        text-align: center;

        div.subtitle {
          margin-bottom: 23px;
        }

        h1 {
          font-size: 40px;
        }

        p.paragraph {
          max-width: none;
          margin-bottom: 39px;
        }
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .contact-hero {
    padding-top: 94px;
    padding-bottom: 50px;

    .container-default {
      .contact-hero-content {
        width: 100%;
        margin-bottom: 20px;
        overflow: unset;

        div.subtitle {
          margin-bottom: 16px;
        }

        h1 {
          font-size: 48px;
        }
      }
    }
  }
}
</style>

<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="blocks">
        <div class="top">
          <p>Precisa de um projeto só seu?</p>
          <button-call-to-action buttonText="Fale Conosco" />
        </div>

        <div class="bottom">
          <logo class="logo" imageName="logo-full-white-brainy-logical.png" />

          <div class="social-media">
            <a href="#"><i class="fa-solid fa-envelope"></i></a>
            <a href="#" target="_blank"><i class="fa-brands fa-youtube"></i></a>
            <a href="#" target="_blank"
              ><i class="fa-brands fa-linkedin"></i
            ></a>
          </div>

          <div class="menu-footer">
            <a href="/">Home</a>
            <a href="/services">Serviços</a>
            <a href="/about">Sobre</a>
            <a href="/projects">Projetos</a>
            <a href="/contact">Contato</a>
          </div>

          <div class="copyright">
            <p>© 2023 Brainy Logical - Direitos reservados.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { Logo, ButtonCallToAction } from '../01-atoms'

export default {
  components: { Logo, ButtonCallToAction },
}
</script>

<style lang="scss">
.footer {
  width: 100%;
  max-width: 1400px;
  height: auto;
  margin: 0 auto;
  padding: 57px 0 20px 0;
  background: $color-general-text;

  .wrapper {
    width: calc(100% - 48px);
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .top {
      width: 100%;
      height: auto;
      padding: 20px;
      margin-top: -50%;
      display: none;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 0 8px 130px 1px rgba(0, 0, 0, 0.07);
      background: #fff;

      p {
        font-size: 1.25rem;
        font-weight: 600;
        text-align: center;
        color: $color-general-text;
      }

      .call-to-action {
        width: auto;
        font-size: 1rem;
        margin-top: 20px;
        padding: 20px;

        span {
          display: none;
        }
      }
    }

    .bottom {
      margin: 20px auto 0 auto;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto auto auto auto;
      align-items: center;
      justify-content: center;

      .logo {
        display: flex;
        justify-content: center;
      }

      .social-media {
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        & > * {
          margin-right: 0;
          padding: 5px 10px;
          font-size: 1.4rem;
          color: #fff;
        }

        & > *:last-child {
          margin-right: 0;
        }
      }

      .menu-footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        a {
          font-size: 1rem;
          text-decoration: none;
          color: #fff;
          margin-bottom: 10px;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }

    .copyright {
      margin-top: 32px;
      font-size: 0.8125rem;
      text-align: center;
      color: #fff;
    }
  }
}

@media (min-width: 600px) {
  .footer {
    .wrapper {
      align-items: unset;
      max-width: 940px;

      .blocks {
        .top {
          margin-top: -130px;
        }

        .bottom {
          margin: 20px auto 0 auto;
          display: grid;
          padding-bottom: 0;
          grid-template-columns: 1fr;
          grid-template-rows: 50px 100px;
          grid-template-areas:
            'logoFooter logoFooter menuFooter menuFooter'
            'copyFooter copyFooter mediaFooter mediaFooter';
          align-items: flex-end;

          .logo {
            grid-area: logoFooter;
            display: flex;
            justify-content: flex-start;
          }

          .social-media {
            grid-area: mediaFooter;
            padding: 0;
            display: flex;
            justify-content: flex-end;
            align-items: center;

            & > * {
              margin-right: 0;
              padding: 5px 10px;
              font-size: 1.4rem;
              color: #fff;
            }

            & > *:last-child {
              padding-right: 0;
              margin-right: 0;
            }
          }

          .menu-footer {
            grid-area: menuFooter;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;

            a {
              font-size: 1rem;
              text-decoration: none;
              color: #fff;
              margin-right: 10px;
              margin-bottom: 0;

              &:last-child {
                margin-right: 0;
                margin-bottom: 0;
              }
            }
          }

          .copyright {
            grid-area: copyFooter;
            width: max-content;
            height: 41px;
            margin-top: 0;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-size: 0.8125rem;
            text-align: left;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>

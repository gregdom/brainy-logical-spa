<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="blocks">
        <div class="top">
          <p>Precisa de um projeto só seu?</p>
          <button-call-to-action buttonText="Fale Conosco" />
        </div>

        <div class="bottom">
          <div class="block">
            <logo class="logo" imageName="logo-full-white-brainy-logical.png" />

            <div class="social-media">
              <router-link to="#"
                ><i class="fa-solid fa-envelope"></i
              ></router-link>
              <router-link to="#"
                ><i class="fa-brands fa-youtube"></i
              ></router-link>
              <router-link to="#"
                ><i class="fa-brands fa-linkedin"></i
              ></router-link>
            </div>
          </div>
          <div class="block">
            <div class="menu-footer">
              <router-link to="/">Home</router-link>
              <router-link to="/services">Serviços</router-link>
              <router-link to="/about">Sobre</router-link>
              <router-link to="/projects">Projetos</router-link>
              <router-link to="/contact">Contato</router-link>
            </div>

            <div class="copyright">
              <p>© 2023 Brainy Logical - Direitos reservados.</p>
            </div>
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
  margin: 92px auto 0 auto;
  padding: 57px 0 20px 0;
  background: $color-branding;

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
      display: flex;
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

      .block {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .social-media {
          padding: 10px;
          display: flex;

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
    }

    .copyright {
      margin-top: 32px;
      font-size: 0.8125rem;
      text-align: center;
      color: #fff;
    }
  }
}
</style>

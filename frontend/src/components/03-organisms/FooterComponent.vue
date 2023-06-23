<template>
  <footer class="section home-footer">
    <div class="container-default">
      <div class="top">
        <router-link to="/" class="logo">
          BRAINY<span>LOGICAL</span>
        </router-link>

        <div class="menu-footer">
          <h3>Menu</h3>

          <a href="/">Home</a>
          <a href="/services">Serviços</a>
          <a href="/about">Sobre</a>
          <a href="/projects">Projetos</a>
          <a href="/contact">Contato</a>
        </div>
      </div>

      <div class="bottom">
        <div class="social-media">
          <a href="#" target="_blank"
            ><img src="../../assets/images/icon-youtube.svg" alt="Icon"
          /></a>
          <a href="#" target="_blank"
            ><img src="../../assets/images/icon-linkedin.svg" alt="Icon"
          /></a>
          <a href="#" target="_blank"
            ><img src="../../assets/images/icon-email.svg" alt="Icon"
          /></a>
        </div>
        <div class="copyright">
          <p>© 2023 Brainy Logical - Direitos reservados.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import {} from '../01-atoms'

export default {
  name: 'FooterComponent',
  components: {},
}
</script>

<style lang="scss">
.home-footer {
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 20px;
  border-top: 10px solid $color-branding;
  background: darken($color-branding, 40%);

  .container-default {
    max-width: 1257px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    flex-direction: column;

    .top {
      margin-bottom: 20px;

      a.logo {
        text-decoration: none;
        font-size: 16px;
        font-weight: 800;
        border-radius: 0;
        color: #fff;
        z-index: 1000;

        span {
          color: lighten($color-branding, 30%);
        }
      }

      .menu-footer {
        margin-top: 30px;
        display: flex;
        flex-direction: column;

        h3 {
          margin-bottom: 20px;
          color: #fafafd;
          font-size: 18px;
          font-weight: 700;
          line-height: 1em;
        }

        a {
          margin-bottom: 15px;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          color: lighten($color-branding, 30%);
          transition: color 350ms ease;

          &:hover {
            color: #fafafd;
          }
        }
      }
    }

    .bottom {
      padding-top: 30px;
      border-top: 1px solid lighten(#071738, 20%);

      .social-media {
        display: flex;

        a {
          width: 30px;
          height: 30px;
          margin-right: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 25px;
          transition: transform 350ms ease, background-color 350ms ease,
            -webkit-transform 350ms ease;
          background: lighten(#071738, 20%);

          &:hover {
            transform: scale3d(0.9, 0.9, 1.01);
            background: $color-branding;
          }

          img {
            width: 18px;
          }
        }
      }

      .copyright {
        p {
          margin-top: 30px;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.687em;
          letter-spacing: -0.01em;
          color: lighten($color-branding, 30%);
        }
      }
    }
  }
}

@media screen and (min-width: 480px) {
  .home-footer {
    padding-top: 60px;
    padding-bottom: 30px;

    .container-default {
      padding-left: 24px;
      padding-right: 24px;

      .top {
        margin-bottom: 40px;

        a.logo {
          font-size: 20px;
        }

        .menu-footer {
          margin-top: 30px;
          display: flex;
          flex-direction: column;

          a {
            margin-bottom: 18px;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .home-footer {
    padding-top: 80px;

    .container-default {
      padding-left: 24px;
      padding-right: 24px;

      .top {
        margin-bottom: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        a.logo {
          font-size: 20px;
        }

        .menu-footer {
          margin-top: 0;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;

          h3 {
            display: none;
          }

          a {
            margin-bottom: 0;
            margin-right: 20px;

            &:last-child {
              margin-right: 0;
            }
          }
        }
      }

      .bottom {
        padding-top: 30px;
        border-top: 1px solid lighten(#071738, 20%);

        .copyright {
          p {
            font-size: 16px;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .home-footer {
    padding-top: 107px;
    padding-bottom: 36px;

    .container-default {
      padding-left: 24px;
      padding-right: 24px;

      .top {
        margin-bottom: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        a.logo {
          font-size: 20px;
        }

        .menu-footer {
          margin-top: 0;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;

          h3 {
            display: none;
          }

          a {
            margin-bottom: 0;
            margin-right: 20px;

            &:last-child {
              margin-right: 0;
            }
          }
        }
      }

      .bottom {
        padding-top: 30px;
        border-top: 1px solid lighten(#071738, 20%);
        display: flex;
        justify-content: space-between;
        align-items: center;

        .copyright {
          p {
            margin-top: 0;
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>

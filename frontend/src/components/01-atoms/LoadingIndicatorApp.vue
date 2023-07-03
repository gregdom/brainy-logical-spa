<template>
  <div>
    <div>
      <div class="headerLoading">
        <div class="container-headerLoading">
          <a href="/" class="logo">
            <div></div>
            BRAINY<span>LOGICAL</span>
          </a>

          <span class="material-symbols-outlined headerLoading-menu-button">
            menu
          </span>

          <div class="nav" @click="handleLinkClick">
            <ul class="main-list">
              <li class="nav-item">
                <a href="/" class="nav-link">Início</a>
              </li>
              <li class="nav-item item-container-sub-menu">
                <div>
                  <div class="fake-link-item">
                    <div class="bold-link">Serviços</div>
                  </div>
                  <span class="material-symbols-outlined">
                    keyboard_arrow_down
                  </span>
                </div>
                <transition name="fade">
                  <div class="sub-menu">
                    <ul class="sub-list">
                      <li class="sub-nav-item">
                        <a href="/services" class="nav-link"
                          >Página de Serviços
                        </a>
                        <a href="/services/browser-extension" class="nav-link"
                          >Extensão de Browser
                        </a>
                        <a href="/services/business-website" class="nav-link"
                          >Criação de Sites
                        </a>
                        <a
                          href="/services/landing-page-website"
                          class="nav-link"
                          >Landing Pages
                        </a>
                      </li>
                    </ul>
                  </div>
                </transition>
              </li>
              <li class="nav-item">
                <a href="/about" class="nav-link">Sobre</a>
              </li>
              <li class="nav-item">
                <a href="/projects" class="nav-link">Portfólio</a>
              </li>
              <li class="nav-item nav-item-contact">
                <a href="/contact" class="nav-link nav-link-contact">Contato</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="divider">
        <div class="inner-divider"></div>
      </div>
    </div>

    <div class="loadingApp">
      <div class="loader">
        <img src="../../assets/images/load.svg" alt="Icon" />
        <p>Carregando...</p>
      </div>
    </div>
  </div>
</template>

<script>
// import { NavMenu } from '../02-molecules'

export default {
  name: 'LoadingIndicatorApp',
  // components: { NavMenu },

  methods: {
    handleLinkClick(event) {
      event.preventDefault()
    },
  },
}
</script>

<style lang="scss" scoped>
.loadingApp {
  .loader {
    position: fixed;
    z-index: 5000;
    top: -300px;
    left: 50%;
    transform: translateX(-50%);
    width: fit-content;
    padding: 5px 16px 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    animation: slideIn 0.5s ease-out forwards;
    animation-delay: 0.5s;
    background: $color-branding;

    @keyframes slideIn {
      from {
        top: -300px;
      }
      to {
        top: 50%;
        transform: translateX(-50%);
      }
    }

    img {
      margin-right: 8px;
      width: 48px;
    }

    p {
      font-size: $font-size-base;
      font-weight: 500;
      color: $color-general-headers-bgdark;
    }
  }
}

.headerLoading {
  padding-top: 15px;
  padding-bottom: 15px;

  &.active {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 900;
  }

  .container-headerLoading {
    max-width: 1257px;
    height: inherit;
    margin-right: auto;
    margin-left: auto;
    padding-right: 16px;
    padding-left: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a.logo {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      font-size: 16px;
      font-weight: 800;
      border-radius: 0;
      color: $color-general-headers;
      z-index: 1000;

      span {
        color: $color-branding;
      }

      div {
        display: none;
        width: 15px;
        height: 15px;
        margin-right: 2px;
        background: $color-branding;
      }
    }

    span.headerLoading-menu-button {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      min-width: 40px;
      padding: 10px;
      border-radius: 1000px;
      color: $color-white;
      z-index: 1000;
      transition: transform 0.3s ease;
      outline: none;
      -webkit-tap-highlight-color: transparent;
      background: $color-branding;

      &:hover {
        outline: none;
      }

      &:active {
        outline: none;
      }

      &.open {
        transform: rotate(90deg);
      }
    }
  }

  .nav-overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 900;
    overflow-y: auto;
    background: $color-white;
    transform: translateX(100%);
    transition: transform 0.3s ease;

    // Actions
    &.open {
      transform: translateX(0);
    }

    .nav {
      padding-top: 100px;
    }
  }

  .nav {
    display: none;
  }
}

.divider {
  max-width: 1257px;
  height: auto;
  margin-right: auto;
  margin-left: auto;
  padding-right: 16px;
  padding-left: 16px;

  .inner-divider {
    height: 1px;
    background-color: #cecddd;
  }
}

@media screen and (min-width: 480px) {
  .headerLoading {
    padding-top: 20px;
    padding-bottom: 20px;

    .container-headerLoading {
      padding-right: 24px;
      padding-left: 24px;

      a.logo {
        font-size: 18px;
      }

      span.headerLoading-menu-button {
        width: 45px;
        height: 45px;
        min-width: 45px;
        padding: 10px;
        font-size: 30px;
        font-weight: 300;
      }
    }
  }

  .divider {
    padding-right: 24px;
    padding-left: 24px;
  }
}

@media screen and (min-width: 768px) {
  .headerLoading {
    padding-top: 26px;
    padding-bottom: 26px;

    .container-headerLoading {
      span.headerLoading-menu-button {
        width: 50px;
        height: 50px;
        min-width: 50px;
        padding: 10px;
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .headerLoading {
    padding-top: 32px;
    padding-bottom: 32px;
    background-color: transparent;

    .container-headerLoading {
      span.headerLoading-menu-button {
        display: none;
      }
    }

    .nav-overlay {
      all: unset;

      .nav {
        padding-top: 0;
      }
    }

    .nav {
      display: block;
    }
  }
}
</style>

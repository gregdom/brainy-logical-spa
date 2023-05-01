<template>
  <header class="grid header">
    <div class="wrapper">
      <span class="material-symbols-outlined icon-menu-open-close iconOpen">
        menu
      </span>
      <logo class="logo" imageName="logo-full-black-brainy-logical.png" />
      <nav class="nav">
        <div class="top">
          <span
            class="material-symbols-outlined icon-menu-open-close iconClose"
          >
            close
          </span>
          <logo class="logo" imageName="logo-full-black-brainy-logical.png" />
        </div>
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/services">Serviços</router-link>
        <router-link class="nav-link" to="/about">Sobre</router-link>
        <router-link class="nav-link" to="/projects">Projetos</router-link>
        <router-link class="nav-link" to="/contact">Contato</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
import { Logo } from '../01-atoms'

export default {
  components: { Logo },
}
</script>

<style lang="scss">
.header {
  width: 100%;
  height: auto;
  padding: 20px 0;

  .wrapper {
    @extend %base-wrapper;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon-menu-open-close {
    display: block;
    padding: 10px 20px 10px 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    font-size: 32px;
  }

  .logo {
    width: fit-content;

    img {
      display: block;
      width: 160px;
    }
  }

  .nav {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 90vw;
    height: 100%;
    padding: 0 8px;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;

    .top {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: auto;
      margin-bottom: 10px;
      padding: 20px 0;

      .icon-menu-open-close {
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        font-size: 32px;
      }
    }

    &-link {
      text-decoration: none;
      display: block;
      padding: 10px 0;
      color: #000;
    }
  }
}

@media (min-width: 768px) {
  .header {
    background: lightblue;
  }
}
</style>

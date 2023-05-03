<template>
  <footer>
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

<style lang="scss" scoped></style>

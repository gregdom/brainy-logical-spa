<template>
  <button class="buttonScrollTop" @click="scrollToTop" v-show="isVisible">
    <span class="material-symbols-outlined"> arrow_upward </span>
  </button>
</template>

<script>
import VueScrollTo from 'vue-scrollto'

export default {
  name: 'BackToTopButton',
  data() {
    return {
      isVisible: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    scrollToTop() {
      VueScrollTo.scrollTo('#app', 500, { easing: 'ease-in-out' })
    },
    handleScroll() {
      this.isVisible = window.pageYOffset > 500
    },
  },
}
</script>

<style lang="scss">
.buttonScrollTop {
  width: 38px;
  height: 38px;
  padding: 10px 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 16px;
  right: 16px;
  cursor: pointer;
  font-size: 1rem;
  color: #fff;
  border-radius: 50%;
  border: 0.1rem solid rgb(74, 80, 95);
  opacity: 0.7;
  background-color: #242830;
}
</style>

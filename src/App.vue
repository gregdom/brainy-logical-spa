<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  components: {},
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

// .grid {
//   display: grid;
//   grid-template-columns: repeat(12, 1fr);
//   align-items: center;
//   gap: 20px;
// }

#app {
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

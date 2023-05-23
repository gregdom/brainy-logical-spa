<template>
  <home-template />
</template>

<script>
import { HomeTemplate } from '../04-templates'
import { mapActions } from 'vuex'

export default {
  components: { HomeTemplate },
  methods: {
    ...mapActions(['populateStoreArr']),
  },
  created() {
    this.populateStoreArr()
  },
}
</script>

<style lang="scss" scoped></style>

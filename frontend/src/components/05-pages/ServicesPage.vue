<template>
  <services-template />
</template>

<script>
import { ServicesTemplate } from '../04-templates'
import { mapActions } from 'vuex'

export default {
  components: { ServicesTemplate },
  methods: {
    ...mapActions(['populateStoreArr']),
  },
  created() {
    this.populateStoreArr()
  },
}
</script>

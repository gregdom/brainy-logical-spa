<template>
  <div>
    <contact-template />
  </div>
</template>

<script>
import { ContactTemplate } from '../04-templates'
import { mapActions } from 'vuex'

export default {
  components: { ContactTemplate },
  methods: {
    ...mapActions(['populateStoreArr']),
  },
  created() {
    this.populateStoreArr()
  },
}
</script>

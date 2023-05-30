<template>
  <div>
    <projects-template />
  </div>
</template>

<script>
import { ProjectsTemplate } from '../04-templates'
import { mapActions } from 'vuex'

export default {
  components: { ProjectsTemplate },
  methods: {
    ...mapActions(['populateStoreArr']),
  },
  created() {
    this.populateStoreArr()
  },
}
</script>

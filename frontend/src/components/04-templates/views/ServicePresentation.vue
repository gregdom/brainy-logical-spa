<template>
  <div>
    <hero-service-presentation />
    <what-is-service-presentation />
  </div>
</template>

<script>
import {
  HeroServicePresentation,
  WhatIsServicePresentation,
} from '../../03-organisms'

export default {
  name: 'ServicePresentation',
  components: { HeroServicePresentation, WhatIsServicePresentation },
  // props: {
  //   titleHero: {
  //     type: String,
  //     required: true,
  //   },
  //   descHero: {
  //     type: String,
  //     required: true,
  //   },
  // },
  methods: {},
}
</script>

<style lang="scss"></style>

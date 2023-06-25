<template>
  <div>
    <hero-service-presentation />
    <what-is-service-presentation />
    <divider-horizontal />
    <testimonial-component />
  </div>
</template>

<script>
import { DividerHorizontal } from '../../01-atoms'
import {
  HeroServicePresentation,
  WhatIsServicePresentation,
  TestimonialComponent,
} from '../../03-organisms'

export default {
  name: 'ServicePresentation',
  components: {
    HeroServicePresentation,
    WhatIsServicePresentation,
    TestimonialComponent,
    DividerHorizontal,
  },
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

<style lang="scss">
@media screen and (min-width: 992px) {
  .home-testimonials {
    padding-top: 130px;
    padding-bottom: 160px;
  }
}
</style>

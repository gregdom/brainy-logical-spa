<template>
  <div>
    <services-component
      titleServices="We are development experts on all technologies & platforms."
      routeName="services"
    />
    <divider-horizontal />
    <testimonial-component />
  </div>
</template>

<script>
import { DividerHorizontal } from '../../01-atoms'
import { ServicesComponent, TestimonialComponent } from '../../03-organisms'

export default {
  name: 'ServicesView',
  components: {
    ServicesComponent,
    TestimonialComponent,
    DividerHorizontal,
  },
}
</script>

<style lang="scss" scoped></style>

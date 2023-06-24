<template>
  <div>
    <services-component
      titleServices="We are development experts on all technologies & platforms."
    />
    <gallery-component />
    <testimonial-component />
  </div>
</template>

<script>
import {
  ServicesComponent,
  GalleryComponent,
  TestimonialComponent,
} from '../../03-organisms'

export default {
  name: 'ServicesView',
  components: {
    ServicesComponent,
    GalleryComponent,
    TestimonialComponent,
  },
}
</script>

<style lang="scss" scoped></style>

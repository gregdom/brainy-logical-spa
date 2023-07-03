<template>
  <div v-if="showModalGallery">
    <div class="modalGallery">
      <img :src="modalGalleryImage" class="modalGallery-image" alt="Foto" />
      <button @click="closeModalGallery" class="buttonCloseModalGallery">
        <span class="material-symbols-outlined header-menu-button">
          close
        </span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'ModalGallery',

  computed: {
    ...mapState({
      showModalGallery: (state) => state.showModalGallery,
      modalGalleryImage: (state) =>
        require(`../../assets/images/${state.modalGalleryImage}.png`),
    }),
  },

  methods: {
    ...mapMutations(['TOGGLE_MODAL_GALLERY']),

    closeModalGallery() {
      this.TOGGLE_MODAL_GALLERY()
    },
  },
}
</script>

<style lang="scss" scoped>
.modalGallery {
  padding: 16px;
  position: fixed;
  z-index: 5000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
    border: 10px solid white;
  }

  button {
    position: absolute;
    z-index: 5010;
    bottom: 42px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    min-width: 50px;
    padding: 10px;
    border-radius: 1000px;
    border: none;
    color: $color-white;
    transition: transform 0.3s ease;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    background: $color-branding;
  }
}

// @media screen and (min-width: 768px) {
//   .modalGallery {
//     img {
//       max-width: 100%;
//       max-height: 100%;
//       border: 10px solid white;
//       position: relative;
//     }

//     button {
//       position: absolute;
//       z-index: 5010;
//       bottom: 42px;
//     }
//   }
// }
</style>

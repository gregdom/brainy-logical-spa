// store.js
import { createStore } from 'vuex'
import axios from 'axios'
import { BACKEND_API } from '@/baseUrl'

const store = createStore({
  state: {
    data: null,
    isOverlayMenuOpen: false,
    isSubMenuOpen: false,
    isLoadingApp: true,
    showModalGallery: false,
    modalGalleryImage: '',
  },

  actions: {
    async queryDataFromServer({ commit }) {
      await axios.get(`${BACKEND_API}/api`)
        .then(function (response) {
          commit("SET_STATE", response.data);
          commit('SET_LOADING_APP', false)
        })
        .catch(function (error) {
          return error
        });
    },
  },

  mutations: {
    SET_LOADING_APP(state, isLoadingApp) {
      state.isLoadingApp = isLoadingApp;
    },

    TOGGLE_MODAL_GALLERY(state, payload) {
      state.modalGalleryImage = payload
      state.showModalGallery = !state.showModalGallery
    },

    // Dados iniciais da store
    SET_STATE(state, payload) {
      state.data = payload
    },

    // Dados do menu
    TOGGLE_OVERLAY_MENU(state, payload) {
      if (payload === true) {
        state.isOverlayMenuOpen = false
        state.isSubMenuOpen = false
        return
      }

      state.isOverlayMenuOpen = !state.isOverlayMenuOpen

      if (!state.isOverlayMenuOpen) {
        state.isSubMenuOpen = false
      }
    },

    TOGGLE_SUB_MENU(state) {
      state.isSubMenuOpen = !state.isSubMenuOpen
    },
  },

  getters: {
    getServiceByLink: (state) => (link) => {
      return state.services.find((service) => service.link === link)
    },

    getServiceByName: (state) => (serviceName) => {
      return state.data.services.find(service => service.name === serviceName);
    },
  }
})

export default store
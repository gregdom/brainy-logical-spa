// store.js
import { createStore } from 'vuex'
import axios from 'axios'
import { BACKEND_API } from '@/baseUrl'

const store = createStore({
  state: {
    isOverlayMenuOpen: false,
    isSubMenuOpen: false,
  },

  actions: {
    async queryDataFromServer({ commit }) {
      await axios.get(BACKEND_API)
        .then(function (response) {
          commit("SET_STATE", response.data);
        })
        .catch(function (error) {
          return error
        });
    },
  },

  mutations: {
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
    }
  }
})
console.log(store.state)
export default store
// store.js
import { createStore } from 'vuex'
import axios from 'axios'
import { BACKEND_API } from '@/baseUrl'

const store = createStore({
  state: {
    isMenuOpen: false,
    isSubmenuOpen: false,
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
    SET_STATE(state, payload) {
      state.data = payload
    },
    // toggleMenu(state) {
    //   state.isMenuOpen = !state.isMenuOpen
    //   if (!state.isMenuOpen) {
    //     state.isSubmenuOpen = false
    //   }
    // },
    // updateIsMenuOpen(state, isOpen) {
    //   state.isMenuOpen = isOpen
    //   state.isSubmenuOpen = isOpen
    // },
    // updateIsSubmenuOpen(state) {
    //   state.isSubmenuOpen = !state.isSubmenuOpen
    // },
  },

  getters: {
    getServiceByLink: (state) => (link) => {
      return state.services.find((service) => service.link === link)
    }
  }
})
console.log(store.state)
export default store
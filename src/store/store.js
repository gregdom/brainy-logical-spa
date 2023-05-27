// store.js
import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state: {
    isMenuOpen: false,
    isSubmenuOpen: false,
    services: [],
    about: [],
    projects: [],
    testimonials: [],
    categories: [],
  },
  mutations: {
    toggleMenu(state) {
      state.isMenuOpen = !state.isMenuOpen
      if (!state.isMenuOpen) {
        state.isSubmenuOpen = false
      }
    },
    updateIsMenuOpen(state, isOpen) {
      state.isMenuOpen = isOpen
      state.isSubmenuOpen = isOpen
    },
    updateIsSubmenuOpen(state) {
      state.isSubmenuOpen = !state.isSubmenuOpen
    },
    setStoreData(state, payload) {
      state.services = payload.services;
      state.about = payload.about;
      state.projects = payload.portfolio;
      state.testimonials = payload.testimonials;
      state.categories = payload.categories;
    },
  },
  actions: {
    async populateStoreArr({ commit }) {
      await axios.get('/api')
        .then(function (response) {
          commit("setStoreData", response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
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

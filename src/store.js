// store.js
import { createStore } from 'vuex'

const store = createStore({
  state: {
    isMenuOpen: false
  },
  mutations: {
    toggleMenu(state) {
      state.isMenuOpen = !state.isMenuOpen
    },
    updateIsMenuOpen(state, isOpen) {
      state.isMenuOpen = isOpen
    }
  }
})

export default store

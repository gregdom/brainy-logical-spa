// store.js
import { createStore } from 'vuex'

const store = createStore({
  state: {
    isMenuOpen: false,
    isSubmenuOpen: false,
    services: [
      {
        link: 'website-development',
        icon: 'web-design-48.png',
        title: 'Web Design',
        shortDescription:
          'Design atraente e responsivo para seu site, que engaja e encanta seus clientes. Crie uma presença online forte.',
        longText: 'Texto Web Design',
      },
      {
        link: 'landing-page-website-development',
        icon: 'analystics-48.png',
        title: 'Landing Page',
        shortDescription:
          'Aumente suas conversões com uma Landing Page otimizada, para gerar mais leads e vendas para seu negócio.',
        longText: 'Texto Web Design',
      },
      {
        link: 'extension-development',
        icon: 'puzzle-48.png',
        title: 'Extensões Web',
        shortDescription:
          'Personalize sua experiência de navegação com Extensões para Chrome e Firefox, que tornam seu dia online.',
        longText: 'Texto Web Design',
      },
    ],
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
  },
  // getters: {
  //   getService: (state) => (serviceName) => {
  //     console.log('getService called with serviceName:', serviceName)
  //     return state.serviceDescription.find((service) => service.link === `services/${serviceName}`)
  //   }
  // }
})

export default store

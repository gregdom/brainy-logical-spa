// store.js
import { createStore } from 'vuex'

const store = createStore({
  state: {
    isMenuOpen: false,
    isSubmenuOpen: false,
    services: [
      {
        link: 'website-development',
        name: 'website-dev',
        icon: 'web-design-48.png',
        title: 'Criação Web',
        shortDescription:
          'Design atraente e responsivo para seu site, que engaja e encanta seus clientes. Crie uma presença online forte.',
        longText: 'Texto Web Design',
      },
      {
        link: 'corporate-website-development',
        name: 'corporate-dev',
        icon: 'analystics-48.png',
        title: 'Site Empresarial',
        shortDescription:
          'Aumente suas conversões com uma Landing Page otimizada, para gerar mais leads e vendas para seu negócio.',
        longText: 'Texto Web Design',
      },
      {
        link: 'startup-website-development',
        name: 'startup-dev',
        icon: 'analystics-48.png',
        title: 'Site para Startup',
        shortDescription:
          'Aumente suas conversões com uma Landing Page otimizada, para gerar mais leads e vendas para seu negócio.',
        longText: 'Texto Web Design',
      },
      {
        link: 'landing-page-website-development',
        name: 'landingpage-dev',
        icon: 'analystics-48.png',
        title: 'Landing Page',
        shortDescription:
          'Aumente suas conversões com uma Landing Page otimizada, para gerar mais leads e vendas para seu negócio.',
        longText: 'Texto Web Design',
      },
      {
        link: 'extension-development',
        name: 'extension-dev',
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
  getters: {
    getServiceByLink: (state) => (link) => {
      return state.services.find((service) => service.link === link)
    }
  }
})

export default store

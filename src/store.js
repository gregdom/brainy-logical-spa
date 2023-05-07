// store.js
import { createStore } from 'vuex'

const store = createStore({
  state: {
    isMenuOpen: false,
    isSubmenuOpen: false,
    services: [
      {
        icon: 'web-design-48.png',
        title: 'Web Design',
        description:
          'Design atraente e responsivo para seu site, que engaja e encanta seus clientes. Crie uma presença online forte.',
        link: 'services/web-design',
      },
      {
        icon: 'analystics-48.png',
        title: 'Landing Page',
        description:
          'Aumente suas conversões com uma Landing Page otimizada, para gerar mais leads e vendas para seu negócio.',
        link: 'services/landing-page',
      },
      {
        icon: 'puzzle-48.png',
        title: 'Extensões Web',
        description:
          'Personalize sua experiência de navegação com Extensões para Chrome e Firefox, que tornam seu dia online.',
        link: 'services/web-extension',
      },
    ],
    serviceDescription: [
      {
        link: 'services/web-design',
        title: 'Web Design',
        description: 'Serviço de web design'
      },
      {
        link: 'services/landing-page',
        title: 'Landing Page',
        description: 'Serviço de landing page'
      },
      {
        link: 'services/web-extension',
        title: 'Extensões Chrome e Firefox',
        description: 'Serviço de extensões web'
      },
    ]
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
    getService: (state) => (serviceName) => {
      console.log('getService called with serviceName:', serviceName)
      return state.serviceDescription.find((service) => service.link === `services/${serviceName}`)
    }
  }
})

export default store

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import VueScrollTo from 'vue-scrollto'

const Vue = createApp(App)
Vue.use(router)
Vue.use(store)
Vue.use(VueScrollTo)
Vue.mount('#app')

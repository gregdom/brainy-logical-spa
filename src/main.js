import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const Vue = createApp(App)
Vue.use(router)
Vue.use(store)
Vue.mount('#app')

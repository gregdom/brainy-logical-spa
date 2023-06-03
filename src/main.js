import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import VueScrollTo from 'vue-scrollto'
import { VueReCaptcha } from 'vue-recaptcha-v3'
import "./axios"

const sitekey = process.env.RECAPTCHA_SITEKEY;
const Vue = createApp(App)
Vue.use(router)
Vue.use(store)
Vue.use(VueScrollTo)
Vue.use(VueReCaptcha, {
  siteKey: sitekey, loaderOptions: {
    autoHideBadge: false,
    explicitRenderParameters: {
      badge: 'inline',
    }
  }
})
Vue.mount('#app')

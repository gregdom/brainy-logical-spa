import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index.js'
import VueScrollTo from 'vue-scrollto'
import { VueReCaptcha } from 'vue-recaptcha-v3'
// import "./axios"

const Vue = createApp(App)
Vue.use(router)
Vue.use(store)
Vue.use(VueScrollTo)
Vue.use(VueReCaptcha, {
  siteKey: '6LdwfzUmAAAAAH4ZK5NtLDhW_apfE1-oef2Ky0Ta', loaderOptions: {
    autoHideBadge: true,
    explicitRenderParameters: {
      size: 'invisible',
    }
  }
})
Vue.mount('#app')

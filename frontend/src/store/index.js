import { createStore } from 'vuex'
import site from './site'

export default function () {
  const Store = createStore({
    modules: {
      site
    },
  })

  return Store
}
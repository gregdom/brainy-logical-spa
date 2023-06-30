import { BACKEND_API } from '@/baseUrl'
import axios from 'axios'

const actions = {
  async fetchDataFromServer({ commit }) {
    try {
      axios.get(BACKEND_API).then(response => {
        const data = response.data
        commit('SET_STATE', data)
        console.log('depois do SET_STATE')
      })
    } catch (error) {
      console.error('Erro ao buscar os dados do servidor:', error)
    }
  },
}

export default actions

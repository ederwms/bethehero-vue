import accountApi from '@/api/account'
import jwtDecode from 'jwt-decode'

export const SET_ACCOUNT = 'SET_ACCOUNT'
export const CLEAR_ACCOUNT = 'CLEAR_ACCOUNT'

const state = {
  account: {}
}
const getters = {
  getterAccount: state => state.account
}
const mutations = {
  [SET_ACCOUNT] (state, values) {
    localStorage.setItem('access-token', values.token)

    const decoded = jwtDecode(values.token)

    state.account = decoded
  },
  [CLEAR_ACCOUNT] (state) {
    localStorage.removeItem('access-token')

    state.account = {}
  }
}
const actions = {
  actionSignIn ({ commit }, id) {
    return accountApi.signIn(id)
      .then((response) => {
        commit('SET_ACCOUNT', response.data)
        return Promise.resolve(response.data)
      })
      .catch((e) => {
        return Promise.reject(e.response.data)
      })
  },
  actionRegister (_, params) {
    return accountApi.register(params)
      .then((response) => {
        return Promise.resolve(response.data)
      })
      .catch((e) => {
        return Promise.reject(e.response.data)
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

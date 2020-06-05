import accountApi from '@/api/account'

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
    localStorage.setItem('user-id', values)

    state.account = values
  },
  [CLEAR_ACCOUNT] (state) {
    localStorage.removeItem('user-id')

    state.account = {}
  }
}
const actions = {
  actionSignIn (_, id) {
    return accountApi.signIn(id)
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

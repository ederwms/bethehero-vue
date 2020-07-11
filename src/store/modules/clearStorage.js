import { CLEAR_ACCOUNT } from './account'

export const clearStorage = ({ commit }) => {
  window.localStorage.removeItem('token-sagah')

  commit(CLEAR_ACCOUNT)

  location.reload(true)
}

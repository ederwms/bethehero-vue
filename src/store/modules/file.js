import fileApi from '@/api/file'

export const SET_FILE = 'SET_FILE'
export const CLEAR_FILE = 'CLEAR_FILE'

const state = {
  file: {
    id: null,
    key: '',
    name: '',
    size: null,
    url: ''
  }
}
const getters = {
  getterFile: state => state.file
}
const mutations = {
  [SET_FILE] (state, values) {
    state.file = values
  },
  [CLEAR_FILE] (state) {
    state.file = {}
  }
}
const actions = {
  actionCreateFile ({ commit }, file) {
    return fileApi.createFile(file)
      .then((response) => {
        commit(SET_FILE, response.data.file)

        return Promise.resolve(response.data)
      })
      .catch((e) => {
        return Promise.reject(e.data)
      })
  },
  actionDeleteFile ({ commit }, id) {
    return fileApi.deleteFile(id)
      .then((response) => {
        commit(CLEAR_FILE)

        return Promise.resolve(response.data)
      })
      .catch((e) => {
        return Promise.reject(e.data)
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

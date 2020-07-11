import incidentApi from '@/api/incident'

export const SET_INCIDENTS = 'SET_INCIDENTS'
export const CLEAR_INCIDENTS = 'CLEAR_INCIDENTS'
export const DELETE_INCIDENT = 'DELETE_INCIDENT'

const state = {
  incidents: []
}
const getters = {
  getterIncidents: state => state.incidents
}
const mutations = {
  [SET_INCIDENTS] (state, values) {
    state.incidents = values
  },
  [CLEAR_INCIDENTS] (state, values) {
    state.incidents = []
  },
  [DELETE_INCIDENT] (state, values) {
    state.incidents = state.incidents.filter((incident) => {
      return incident.idincident !== values
    })
  }
}
const actions = {
  actionGetAllIncidents ({ commit }) {
    return incidentApi.getAllIncidents()
      .then((response) => {
        commit('SET_INCIDENTS', response.data.results)

        return Promise.resolve(response.data)
      })
      .catch((e) => {
        return Promise.reject(e.response.data)
      })
  },
  actionCreateIncident (_, incident) {
    return incidentApi.createIncident(incident)
      .then((response) => {
        return Promise.resolve(response.data)
      })
      .catch((e) => {
        return Promise.reject(e.response.data)
      })
  },
  actionDeleteIncident ({ commit }, id) {
    return incidentApi.deleteIncident(id)
      .then((response) => {
        commit('DELETE_INCIDENT', id)
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

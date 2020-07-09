import Const from '@/helpers/const'
import { custAxios } from './genericApi'

export default {
  getAllIncidents () {
    return custAxios().get(`${Const.API_INCIDENTS}`)
  },
  createIncident (incident) {
    return custAxios().post(`${Const.API_INCIDENTS}`, incident)
  },
  deleteIncident (id) {
    return custAxios().delete(`${Const.API_INCIDENTS}/${id}`)
  }
}

import axios from 'axios'
import Const from '@/helpers/const'
// import { custAxios } from './genericApi'

export default {
  signIn (idong) {
    return axios.post(`${Const.API_SESSION}`, { idong })
  },
  register (ong) {
    return axios.post(`${Const.API_ONGS}`, ong)
  }
}

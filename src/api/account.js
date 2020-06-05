import axios from 'axios'
import Const from '@/helpers/const'
// import { custAxios } from './genericApi'

export default {
  signIn (id) {
    return axios.post(`${Const.API_SESSION}`, { id })
  }
}

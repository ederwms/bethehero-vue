import Const from '@/helpers/const'
import { custAxios } from './genericApi'

export default {
  createFile (file) {
    return custAxios().post(`${Const.API_FILES}`, file)
  },
  deleteFile (id) {
    return custAxios().delete(`${Const.API_FILES}/${id}`)
  }
}

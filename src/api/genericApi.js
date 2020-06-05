import axios from 'axios'
// import Const from '@/helpers/const'

export const custAxios = () => {
  const instance = axios.create({
    headers: {
    }
  })

  return instance
}

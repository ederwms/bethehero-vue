import axios from 'axios'
// import Const from '@/helpers/const'

export const custAxios = () => {
  const instance = axios.create({
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('access-token')}`
    }
  })

  return instance
}

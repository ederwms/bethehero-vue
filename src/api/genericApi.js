import Vue from 'vue'
import axios from 'axios'
import Const from '@/helpers/const'

export const refreshToken = (originalRequest) => {
  if (originalRequest.headers.hasOwnProperty('Authorization')) {
    return axios.post(`${Const.API_REVALIDATE}`, null, {
      headers: {
        Authorization: originalRequest.headers.Authorization
      }
    })
  }

  /* eslint-disable-next-line */
  return Promise.reject()
}

export const custAxios = () => {
  const instance = axios.create({
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('access-token')}`
    }
  })

  instance.interceptors.response.use(async (config) => config, async (error) => {
    try {
      if (error.response.status === 401) {
        if (error.response.data.message && error.response.data.message.includes('Invalid token')) {
          const originalRequest = error.config
          const newToken = await refreshToken(originalRequest)

          if (newToken.status === 200 && newToken.data.token) {
            window.localStorage.setItem('access-token', newToken.data.token)

            originalRequest.headers.Authorization = `Bearer ${newToken.data.token}`
            return axios(originalRequest)
          }

          return newToken
        }

        Vue.prototype.$globalStore.dispatch('clearStorage')
        throw error
      } else {
        return Promise.reject(error.response)
      }
    } catch (err) {
      if (err.response.status === 401 && err.response.config.url.includes('/revalidate')) {
        Vue.prototype.$globalStore.dispatch('clearStorage')
      }

      return Promise.reject(err.response)
    }
  })

  return instance
}

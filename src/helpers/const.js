const API_HOST = () => {
  return process.env.VUE_APP_API_URL
}

const API_URL = `${API_HOST()}/api/v1`

const API_SESSION = `${API_URL}/session`
const API_ONGS = `${API_URL}/ongs`
const API_INCIDENTS = `${API_URL}/incidents`

export default {
  API_SESSION,
  API_ONGS,
  API_INCIDENTS
}

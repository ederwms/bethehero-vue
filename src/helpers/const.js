const API_HOST = () => {
  return process.env.VUE_APP_API_URL
}

const API_URL = `${API_HOST()}/api`

const API_ONGS = `${API_URL}/ongs`
const API_SESSION = `${API_URL}/session`

export default {
  API_ONGS,
  API_SESSION
}

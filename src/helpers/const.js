const API_HOST = () => {
  return 'http://localhost:3333'
}

const API_URL = `${API_HOST()}/api`

const API_ONGS = `${API_URL}/ongs`
const API_SESSION = `${API_URL}/session`

export default {
  API_ONGS,
  API_SESSION
}

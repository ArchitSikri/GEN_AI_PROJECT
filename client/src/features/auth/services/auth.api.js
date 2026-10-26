import axios from 'axios'

const AUTH_API_URL = 'http://localhost:9000/api/auth'
const requestConfig = { withCredentials: true }

export async function register({ username, email, password }) {
  const response = await axios.post(
    `${AUTH_API_URL}/register`,
    { username, email, password },
    requestConfig,
  )

  return response.data
}

export async function login({ email, password }) {
  const response = await axios.post(
    `${AUTH_API_URL}/login`,
    { email, password },
    requestConfig,
  )

  return response.data
}

export async function logout() {
  const response = await axios.get(`${AUTH_API_URL}/logout`, requestConfig)
  return response.data
}

export async function getMe() {
  const response = await axios.get(`${AUTH_API_URL}/get-me`, requestConfig)
  return response.data
}

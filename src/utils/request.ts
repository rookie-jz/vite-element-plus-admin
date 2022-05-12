import axios from 'axios'

const service = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 60 * 1000
})

service.interceptors.request.use(config => {
  return config
}, error => {
  console.log(error)
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  return response.data || response
}, error => {
  console.log(error)
  return Promise.reject(error)
})

export default service

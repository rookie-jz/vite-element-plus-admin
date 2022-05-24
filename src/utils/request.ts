import axios from 'axios'
import { AxiosRequestConfig } from 'axios'
import { getToken } from './auth'

const service = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 60 * 1000
})

service.interceptors.request.use(
  (config) => {
    return {
      // url,
      // params,
      ...config,
      token: getToken()
    }
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    return response.data || response
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

const request = <T = any>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> => {
  if (typeof config === 'string') {
    if (!options) {
      return service.request<T, T>({
        url: config
      })
    } else {
      return service.request<T, T>({
        url: config,
        ...options
      })
    }
  } else {
    return service.request<T, T>(config)
  }
}

export function $get<T = any>(
  url: string,
  params?: any,
  options?: AxiosRequestConfig
): Promise<T> {
  return request({ url, params, method: 'GET' }, options)
}

export function $post<T = any>(
  url: string,
  data?: any,
  options?: AxiosRequestConfig
): Promise<T> {
  return request({ url, data, method: 'POST' }, options)
}
export function $put<T = any>(
  url: string,
  data?: any,
  options?: AxiosRequestConfig
): Promise<T> {
  return request({ url, data, method: 'PUT' }, options)
}
export function $delete<T = any>(
  url: string,
  params?: any,
  options?: AxiosRequestConfig
): Promise<T> {
  return request({ url, params, method: 'DELETE' }, options)
}

export default request

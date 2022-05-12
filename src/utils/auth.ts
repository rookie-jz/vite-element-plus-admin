const key = '__token__'

export function setToken(token: string) {
  return window.sessionStorage.setItem(key, token)
}

export function getToken() {
  return window.sessionStorage.getItem(key)
}

export function removeToken() {
  return window.sessionStorage.removeItem(key)
}

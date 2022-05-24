import { $get, $post } from '@/utils/request'

export async function login(username: string, password: string) {
  const data = { username, password }
  return await $post('/api/user/login', data)
}

export async function getUserInfo() {
  return await $get('/api/user/getUser')
}

export async function getPermission() {
  return await $get('/api/user/getPermission')
}

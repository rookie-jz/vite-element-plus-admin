import { defineStore } from 'pinia'
import { removeToken } from '@/utils/auth'
import router from '@/router'
import { getUserInfo, login, getPermission } from '@/api/user'
import { ElMessage } from 'element-plus'
import { isEmpty } from 'lodash'

interface User {
  username: string
  password: string
}

interface UserInfo {
  name: ''
}

export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return {
      token: '',
      userInfo: {}
    }
  },
  actions: {
    async login({ username, password }: User) {
      const { status, message, data } = await login(username, password)
      if (status === 200) {
        return data
      }
      return ElMessage.error(message)
    },
    logout() {
      this.userInfo = {}
      removeToken()
      router.push('/login')
    },
    async getUserInfo() {
      if (isEmpty(this.userInfo)) {
        const { status, message, data } = await getUserInfo()
        if (status === 200) {
          this.userInfo = data
          return data
        } else if (status === 3000) {
          // 登录失效，重新登录
          ElMessage.error('登录过期，请重新登录')
          router.push('/login')
        }
        return ElMessage.error(message)
      }
      return this.userInfo
    },
    // 获取权限
    async getPermission() {
      const { data } = await getPermission()
      return data
    }
  }
})

import router from '@/router'
import { useUserStore } from '@/store/user'
import { isEmpty } from 'lodash'
import { getToken } from './utils/auth'
import generalAsyncRoute from '@/router/auth'
// nprogress
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

let isHandleRoute = false
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const userStore = useUserStore()
  const token = getToken()
  if (!token && to.name !== 'Login') {
    return next('/login')
  } else {
    if (isEmpty(userStore.userInfo)) {
      //  Todo get user info
      const userInfo = await userStore.getUserInfo()
      console.log({ userInfo })
    }
    // Todo general router
    if (!isHandleRoute) {
      await generalAsyncRoute(router)
      isHandleRoute = true
      console.log('handle route done!')
      NProgress.done()
      return next({ ...to, replace: true })
    }
  }
  NProgress.done()
  next()
})

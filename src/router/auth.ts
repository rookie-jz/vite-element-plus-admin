import { useUserStore } from '@/store/user'
import Layout from '@/layout/index.vue'
import { Router, RouteRecordRaw } from 'vue-router'
const modules = import.meta.glob('@/views/**/*.vue')

async function generalAsyncRoute(router: Router) {
  const userStore = useUserStore()
  const permissions = await userStore.getPermission()
  const routes = await generalRoute(permissions)

  router.options.routes = router.options.routes.concat(routes)
  routes.forEach((route: RouteRecordRaw) => {
    router.addRoute(route)
  })
}

function generalRoute(permissions: any[]) {
  const routes: any[] = []
  permissions.forEach(ele => {
    const item: any = {
      path: ele.path,
      name: ele.name,
      meta: ele.meta,
      hidden: ele.hidden
    }
    if (ele.component === 'Layout') {
      item.component = Layout
    } else {
      const key = generalFullImportPath(ele.component)
      item.component = modules[key]
    }
    if (ele.children) {
      item.children = generalRoute(ele.children)
      item.awayShow = true
    }
    routes.push(item)
  })
  return routes
}

function generalFullImportPath(path: string) {
  return `../views${path}.vue`
}

export default generalAsyncRoute

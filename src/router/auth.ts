import store from '@/store'
import Layout from '@/layout/index.vue'

async function getAsyncRoute() {
  const permissions = await store.dispatch('user/getPermission')
  return generalRoute(permissions)
}

function generalRoute(permissions: any[]) {
  const routes: any[] = []
  permissions.forEach((ele) => {
    const item: any = {
      path: ele.path,
      name: ele.name,
      meta: ele.meta,
      hidden: ele.hidden
    }
    if (ele.component === 'Layout') {
      item.component = Layout
    } else {
      item.component = require(`@/views${ele.component}.vue`).default
    }
    if (ele.children) {
      item.children = generalRoute(ele.children)
      item.awayShow = true
    }
    routes.push(item)
  })
  return routes
}

export default getAsyncRoute

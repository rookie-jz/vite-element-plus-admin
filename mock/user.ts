export default [
  {
    url: '/api/user/login',
    method: 'post',
    response: () => {
      return {
        status: 200,
        message: 'ok',
        data: 'token_123321'
      }
    }
  },
  {
    url: '/api/user/getUser',
    method: 'get',
    response: () => {
      return {
        status: 200,
        message: 'ok',
        data: {
          name: '周星星',
          id: 1,
          loginName: 'admin'
        }
      }
    }
  },
  {
    url: '/api/user/getPermission',
    method: 'get',
    response: () => {
      return {
        status: 200,
        message: 'ok',
        data: [
          {
            path: '/auth',
            component: 'Layout',
            redirect: 'index',
            meta: { title: '权限管理', icon: 'auth' },
            children: [
              {
                path: 'role',
                name: 'authRole',
                component: '/auth/role',
                meta: { title: '角色管理' }
              },
              {
                path: 'set',
                name: 'authSet',
                component: '/auth/set',
                meta: { title: '权限配置' }
              },
              {
                path: 'user',
                name: 'authUser',
                component: '/auth/user',
                meta: { title: '用户管理' }
              }
            ]
          }
        ]
      }
    }
  }
]

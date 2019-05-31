import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/createsite',
    component: Layout,
    name: 'Createsite',
    alwaysShow: true,
    meta: { title: '创建网站', icon: 'example' },
    children: [
      {
        path: 'sets',
        name: 'Sets',
        component: () => import('@/views/table/index'),
        meta: { title: '网站集合' }
      }
    ]
  },
  {
    path: '/libs',
    component: Layout,
    meta: { title: '组成库', icon: 'form' },
    children: [
      {
        path: 'modules',
        name: 'Modules',
        component: () => import('@/views/module/index'),
        meta: { title: '模块' }
      },
      {
        path: 'components',
        name: 'Components',
        component: () => import('@/views/module/index'),
        meta: { title: '组件' }
      },
      {
        path: 'relations',
        name: 'Relations',
        component: () => import('@/views/module/index'),
        meta: { title: '关系表' }
      }
    ]
  },

  {
    path: '/styles',
    component: Layout,
    alwaysShow: true,
    name: 'Styles',
    meta: {
      title: '样式库',
      icon: 'nested'
    },
    children: [
      {
        path: 'libs',
        component: () => import('@/views/style/index'),
        name: 'Menu1',
        meta: { title: '样式集合' }
      }
    ]
  },

  {
    path: '/user',
    component: Layout,
    name: 'User',
    meta: { title: '用户中心', icon: 'example' },
    children: [{
      path: 'manage',
      name: 'Manage',
      component: () => import('@/views/user/index'),
      meta: { title: '用户管理', icon: 'dashboard' }
    }, {
      path: 'auth',
      name: 'Auth',
      component: () => import('@/views/user/changePassWord'),
      meta: { title: '权限管理', icon: 'dashboard' }
    }]
  },
  {
    path: '/system',
    component: Layout,
    meta: { title: '系统设置', icon: 'link' },
    children: [{
      path: 'manage',
      name: 'Manage',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '字典表管理', icon: 'dashboard' }
    }, {
      path: 'recycle',
      name: 'Recycle',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '回收站', icon: 'dashboard' }
    }, {
      path: 'recycle1',
      name: 'Recycle1',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '回收站', icon: 'dashboard' }
    }]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

export const routes = [
  {
    path:'/',
    meta:{title:"动态组件"},
    component: () => import('../components/DynamicComponent.vue')
  },
  {
    path:'/car',
    meta:{title:"购物车组件"},
    component: () => import('../components/BuyCar.vue'),
    children:[]
  },
  {
    path:'/async',
    meta:{title:"异步组件"},
    component: () => import('../components/AsyncComponent.vue')
  },
  {
    path:'/form',
    meta:{title:"表单组件"},
    component: () => import('../components/FormComponent.vue')
  }
]
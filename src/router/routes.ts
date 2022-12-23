export const routes = [
  {
    path:'/',
    meta:{title:"经营决策中心"},
    component: () => import('../views/business/Index.vue')
  },
  {
    path:'/production',
    meta:{title:"生产运营中心"},
    component: () => import('../views/production/Index.vue'),
  },
  {
    path:'/park',
    meta:{title:"园区运营中心"},
    component: () => import('../views/park/Index.vue')
  }
]
export const routes = [
  {
    path:"/",
    redirect:"/business"
  },
  {
    path:'/business',
    meta:{title:"经营决策中心",isAuth: true},
    component: () => import('../views/business/Index.vue')
  },
  {
    path:'/production',
    meta:{title:"生产运营中心",isAuth: true},
    component: () => import('../views/production/Index.vue'),
  },
  {
    path:'/park',
    meta:{title:"园区运营中心",isAuth: true},
    component: () => import('../views/park/Index.vue')
  },
  {
    path:'/test',
    meta:{title:"test",isAuth: false},
    component: () => import('../views/Test.vue')
  }
]
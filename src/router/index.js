import { createRouter, createWebHistory } from 'vue-router'
import fire from '../views/深海大鳳梨/fire.vue'
// import HomeView from '../views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 每個新增的分頁都要在下方設定
    // {
    //   path: '/', //導航地址
    //   name: 'home', //導航名稱
    //   component: HomeView //目的地
    // },
    
    
    {
      path:'/',
      name:'Fast',
      component:() => import("../views/宇/fast.vue")
    },
    {
      path:'/RenewableEnergySource',
      name:'RenewableEnergySource',
      component:() => import("@/views/義/RenewableEnergySource.vue")
    },
    {
      path:'/fire',
      name:'fire',
      component:()=>import('../views/深海大鳳梨/fire.vue')
    },
    {
      path:'/HomeView',
      name:'HomeView',
      component:()=>import('../views/鳴 儒/HomeView.vue')

    },
    {
      path:'/circle',
      name:'circle',
      component:()=>import('../views/慧，宇/circle.vue')

    }
    
  ]
})

export default router

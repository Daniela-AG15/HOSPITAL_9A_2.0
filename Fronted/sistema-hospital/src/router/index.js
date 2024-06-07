import { createRouter, createWebHistory } from 'vue-router'
import RegisterUser from '@/components/registerUser.vue'
import LoginView from '@/components/login.vue'
import DashboardView from '@/components/dashboard.vue'
import PersonasVIew from '@/components/personas.vue'
// import UsuariosView from '@/components/usuarios.vue'
import ConsumiblesView from '@/components/consumibles.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterUser
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView ,
      children:[
        {path:'/personas',name:'personas',component:PersonasVIew},
        {path:'/consumibles',name:'consumibles',component:ConsumiblesView}
      ]
    }
  ]
})

export default router

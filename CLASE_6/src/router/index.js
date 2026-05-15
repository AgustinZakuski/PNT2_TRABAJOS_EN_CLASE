import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '../views/ProductsView.vue'
import HomeView from '../views/HomeView.vue'
import PaginaRandom from '../views/PaginaRandom.vue'

const routes = [ 
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/productos',
    name: 'ProductsView',
    component: ProductsView
  },
  {
    path: '/contact',
    name: 'ContactView',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/PaginaRandom',
    name: 'PaginaRandom',
    component: PaginaRandom
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
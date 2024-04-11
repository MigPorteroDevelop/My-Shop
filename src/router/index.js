import { createRouter, createWebHistory } from 'vue-router'
import Products from '../components/Products.vue'
import Basket from '../components/Basket.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/basket',
      name: 'basket',
      component: Basket
    }
  ]
})

export default router

import { createRouter, createMemoryHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/nihoncards',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router

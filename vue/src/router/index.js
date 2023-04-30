import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BarChart from '../views/About.vue'

const routes = [
  { path: '/', name: 'Home', component: BarChart },
  { path: '/about', name: 'About', component: Home }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

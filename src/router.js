import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/05-pages/HomePage.vue'
import Services from '@/components/05-pages/ServicesPage.vue'
import About from '@/components/05-pages/AboutPage.vue'
import Projects from '@/components/05-pages/ProjectsPage.vue'
import Contact from '@/components/05-pages/ContactPage.vue'
import NotFound from '@/components/05-pages/NotFound.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/services/:serviceName',
    component: Services,
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/projects',
    component: Projects
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/:pathMatch(.*)',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
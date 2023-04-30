import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/components/05-pages/Home.vue'
import Services from '@/components/05-pages/Services.vue'
import About from '@/components/05-pages/About.vue'
import Projects from '@/components/05-pages/Projects.vue'
import Contact from '@/components/05-pages/Contact.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/services',
    component: Services
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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
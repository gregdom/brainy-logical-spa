import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/05-pages/HomePage.vue'
import Services from '@/components/05-pages/ServicesPage.vue'
import About from '@/components/05-pages/AboutPage.vue'
import Projects from '@/components/05-pages/ProjectsPage.vue'
import Contact from '@/components/05-pages/ContactPage.vue'
import NotFound from '@/components/05-pages/NotFound.vue'

// Nested
import WebDevelopment from '@/components/04-templates/ServiceNested/WebDevelopment.vue'
import CorporateWebDevelopment from '@/components/04-templates/ServiceNested/CorporateWebDevelopment.vue'
import StartupWebDevelopment from '@/components/04-templates/ServiceNested/StartupWebDevelopment.vue'
import LandingPageWebDevelopment from '@/components/04-templates/ServiceNested/LandingPageWebDevelopment.vue'
import ExtensionWebDevelopment from '@/components/04-templates/ServiceNested/ExtensionWebDevelopment.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/services',
    component: Services,
  },
  {
    path: '/services/website-development',
    component: WebDevelopment
  },
  {
    path: '/services/corporate-website-development',
    component: CorporateWebDevelopment
  },
  {
    path: '/services/startup-website-development',
    component: StartupWebDevelopment
  },
  {
    path: '/services/landing-page-website-development',
    component: LandingPageWebDevelopment
  },
  {
    path: '/services/extension-development',
    component: ExtensionWebDevelopment
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
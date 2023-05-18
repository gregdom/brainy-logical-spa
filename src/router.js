import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/05-pages/HomePage.vue'
import Services from '@/components/05-pages/ServicesPage.vue'
import About from '@/components/05-pages/AboutPage.vue'
import Projects from '@/components/05-pages/ProjectsPage.vue'
import Contact from '@/components/05-pages/ContactPage.vue'
import NotFound from '@/components/05-pages/NotFound.vue'

// Nested
import WebDevelopment from '@/components/04-templates/ServiceNested/WebDevelopment.vue'
// import CorporateWebDevelopment from '@/components/04-templates/ServiceNested/CorporateWebDevelopment.vue'
// import StartupWebDevelopment from '@/components/04-templates/ServiceNested/StartupWebDevelopment.vue'
// import LandingPageWebDevelopment from '@/components/04-templates/ServiceNested/LandingPageWebDevelopment.vue'
// import ExtensionWebDevelopment from '@/components/04-templates/ServiceNested/ExtensionWebDevelopment.vue'
import DisplayService from '@/components/04-templates/ServiceNested/DisplayService.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/services',
    name: 'services',
    component: Services,
  },
  {
    path: '/services/website-development',
    name: 'website-dev',
    props: true,
    component: WebDevelopment
  },
  {
    path: '/services/corporate-website-development',
    name: 'corporate-dev',
    props: true,
    component: DisplayService
  },
  {
    path: '/services/startup-website-development',
    name: 'startup-dev',
    props: true,
    component: DisplayService
  },
  {
    path: '/services/landing-page-website-development',
    name: 'landingpage-dev',
    props: true,
    component: DisplayService
  },
  {
    path: '/services/extension-development',
    name: 'extension-dev',
    props: true,
    component: DisplayService
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/contact',
    name: 'contact',
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
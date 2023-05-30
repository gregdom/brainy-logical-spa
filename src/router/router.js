import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import(/* webpackChunkName: "Home" */ '@/components/05-pages/HomePage.vue')
const Services = () => import(/* webpackChunkName: "Services" */ '@/components/05-pages/ServicesPage.vue')
const About = () => import(/* webpackChunkName: "About" */ '@/components/05-pages/AboutPage.vue')
const Projects = () => import(/* webpackChunkName: "Projects" */ '@/components/05-pages/ProjectsPage.vue')
const Contact = () => import(/* webpackChunkName: "Contact" */ '@/components/05-pages/ContactPage.vue')
const NotFound = () => import(/* webpackChunkName: "NotFound" */ '@/components/05-pages/NotFound.vue')

// Nested
const WebDevelopment = () => import(/* webpackChunkName: "WebDevelopment" */ '@/components/04-templates/ServiceNested/WebDevelopment.vue')
const DisplayService = () => import(/* webpackChunkName: "DisplayService" */ '@/components/04-templates/ServiceNested/DisplayService.vue')

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
    path: '/notfound',
    component: NotFound
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/notfound'
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
import { createRouter, createWebHistory } from 'vue-router'
const HomePage = () => import(/* webpackChunkName: "Home" */ '@/components/05-pages/HomePage.vue')
const ServicesPage = () => import(/* webpackChunkName: "Services" */ '@/components/05-pages/ServicesPage.vue')
const AboutPage = () => import(/* webpackChunkName: "About" */ '@/components/05-pages/AboutPage.vue')
const ProjectsPage = () => import(/* webpackChunkName: "Projects" */ '@/components/05-pages/ProjectsPage.vue')
const ContactPage = () => import(/* webpackChunkName: "Contact" */ '@/components/05-pages/ContactPage.vue')
const NotFoundPage = () => import(/* webpackChunkName: "NotFound" */ '@/components/05-pages/NotFound.vue')

// Views Principais
const ServicesView = () => import(/* webpackChunkName: "ServicesView" */ '@/components/04-templates/views/ServicesView.vue')
const ServicePresentation = () => import(/* webpackChunkName: "ServicePresentation" */ '@/components/04-templates/views/ServicePresentation.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/services',
    component: ServicesPage,
    children: [
      {
        path: '',
        name: 'services',
        component: ServicesView
      },
      {
        path: 'browser-extension',
        name: 'browser-extension',
        component: ServicePresentation
      },
      {
        path: 'business-website',
        name: 'business-website',
        component: ServicePresentation
      },
      {
        path: 'landing-page-website',
        name: 'landing-page-website',
        component: ServicePresentation
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsPage
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage
  },
  {
    path: '/notfound',
    component: NotFoundPage
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/notfound'
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        resolve();
      }, 900);
    });
  },
})

export default router
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import ServicesPage from './pages/ServicesPage.vue'
import ProjectsPage from './pages/ProjectsPage.vue'
import ProjectDetailPage from './pages/ProjectDetailPage.vue'
import AboutPage from './pages/AboutPage.vue'
import ContactPage from './pages/ContactPage.vue'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: (to, from, saved) => saved || { top: 0, behavior: 'instant' },
  routes: [
    { path: '/', component: HomePage },
    { path: '/services', component: ServicesPage },
    { path: '/projects', component: ProjectsPage },
    { path: '/projects/:id', component: ProjectDetailPage },
    { path: '/about', component: AboutPage },
    { path: '/contact', component: ContactPage },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
})

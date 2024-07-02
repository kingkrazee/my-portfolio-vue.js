import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectView from '../views/ProjectView.vue'
import SkillsView from '../views/SkillsView.vue'
import ResumeView from '../views/ResumeView.vue'
import TestimonialsView from '../views/TestimonialsView.vue'
import ContactView from '../views/ContactView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectView
  },
  {
    path: '/skills',
    name: 'skills',
    component: SkillsView
  },
  {
    path: '/resume',
    name: 'resume',
    component: ResumeView
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: TestimonialsView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

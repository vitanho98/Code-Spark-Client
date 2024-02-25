import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EnrollCourseView from '@/views/EnrollCourseView.vue'
import ModulePageViewVue from '@/views/ModulePageView.vue'
import SingUpViewVue from '@/views/SingUpView.vue'
import SingInViewVue from '@/views/SingInView.vue'
import ProfileViewVue from '@/views/ProfileView.vue'
import ClassPageViewVue from '@/views/ClassPageView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/course/:courseId/enroll',
      name: 'enroll',
      component: EnrollCourseView
    },
    {
      path: '/singup',
      name: 'singup',
      component: SingUpViewVue
    },
    {
      path: '/singin',
      name: 'singin',
      component: SingInViewVue
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileViewVue
    },
    {
      path: '/classpage',
      name: 'classpage',
      component: ClassPageViewVue
    },
    {
      path: '/modules',
      name: 'modules',
      component: ModulePageViewVue
    }
  ]
})

export default router

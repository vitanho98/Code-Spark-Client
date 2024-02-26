import { useAuthStore } from '@/stores/auth'

import EnrollCourseView from '@/views/EnrollCourseView.vue'
import CatalogPageViewVue from '@/views/CatalogPageView.vue'
import ModulePageViewVue from '@/views/ModulePageView.vue'
import ProfileViewVue from '@/views/ProfileView.vue'
import ClassPageViewVue from '@/views/ClassPageView.vue'
import ClassViewVue from '@/views/ClassView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpViewVue from '@/views/SignUpView.vue'
import SignInViewVue from '@/views/SignInView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  scrollBehavior() {
    return {
      top: 0
    }
  },

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/course/:courseId/enroll',
      name: 'enroll',
      component: EnrollCourseView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpViewVue,
      meta: {
        hideNavbar: true,
      },
      beforeEnter: () => {
        const { isAuthenticated } = useAuthStore()

        if (isAuthenticated) {
          return {
            name: 'home'
          }
        }
      }
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignInViewVue,
      meta: {
        hideNavbar: true,
      },
      beforeEnter: () => {
        const { isAuthenticated } = useAuthStore()

        if (isAuthenticated) {
          return {
            name: 'home'
          }
        }
      }
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
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: CatalogPageViewVue

    },
    {
      path: '/classes',
      name: 'classes',
      component: ClassViewVue

    }
  ]
})

router.beforeEach(async () => {
  const { getAuthenticatedUserData } = useAuthStore()
  await getAuthenticatedUserData()
})

export default router

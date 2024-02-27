import { useAuthStore } from '@/stores/auth'
import DashboardView from '@/views/DashboardView.vue'
import EnrollCourseView from '@/views/EnrollCourseView.vue'
import CatalogPageView from '@/views/CatalogPageView.vue'
import ModulePageView from '@/views/ModulePageView.vue'
import ProfileView from '@/views/ProfileView.vue'
import ClassViewVue from '@/views/ClassView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '@/views/SignUpView.vue'
import SignInView from '@/views/SignInView.vue'
import ClassPageView from '@/views/ClassPageView.vue'
import CoursePageView from '@/views/CoursePageView.vue'



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
      component: SignUpView,
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
      component: SignInView,
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
      component: ProfileView
    },
    {
      path: '/classpage',
      name: 'classpage',
      component: ClassPageView
    },
    {
      path: '/modules',
      name: 'modules',
      component: ModulePageView
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: CatalogPageView

    },
    {
      path: '/coursepage',
      name: 'coursepage',
      component: CoursePageView
    },
    {
      path: '/classes',
      name: 'classes',
      component: ClassViewVue
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
    }
  ]
})

router.beforeEach(async () => {
  const { getAuthenticatedUserData } = useAuthStore()
  await getAuthenticatedUserData()
})

export default router

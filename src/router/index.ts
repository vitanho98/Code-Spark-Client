import { useAuthStore } from '@/stores/auth'
import ClassPageView from '@/views/ClassPageView.vue'
import EnrollCourseView from '@/views/EnrollCourseView.vue'
import ModulePageViewVue from '@/views/ModulePageView.vue'
import ClassPageViewVue from '@/views/ClassPageView.vue'
import ProfileViewVue from '@/views/ProfileView.vue'
import SignInView from '@/views/SignInView.vue'
import SignUpView from '@/views/SignUpView.vue'
import CoursePageView from '@/views/CoursePageView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatalogPageViewVue from '@/views/CatalogPageView.vue'


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
      path: '/coursepage',
      name: 'coursepage',
      component: CoursePageView
    }
  ]
})

router.beforeEach(async () => {
  const { getAuthenticatedUserData } = useAuthStore()
  await getAuthenticatedUserData()
})

export default router

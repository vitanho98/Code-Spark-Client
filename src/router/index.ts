import type { ICourse } from '@/interfaces/ICourse'
import { api } from '@/lib/axios'
import { useAuthStore } from '@/stores/auth'
import AddModuleToCourseView from '@/views/AddModuleToCourseView.vue'
import ClassPageView from '@/views/ClassPageView.vue'
import EnrollCourseView from '@/views/EnrollCourseView.vue'
import ProfileViewVue from '@/views/ProfileView.vue'
import RegisterCourseView from '@/views/RegisterCourseView.vue'
import SignInView from '@/views/SignInView.vue'
import SignUpView from '@/views/SignUpView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      path: '/courses/new',
      name: 'registerCourse',
      component: RegisterCourseView,
    },

    {
      path: '/courses/:courseId/modules/new',
      name: 'addModuleToCourse',
      component: AddModuleToCourseView,
      beforeEnter: async (to, from, next) => {
        const courseId = to.params.courseId as string
        const { user } = useAuthStore()

        try {
          const response = await api.get<{course: ICourse}>(`/courses/${courseId}`)
          const instructorIsTheOwner = user && user.id === response.data.course.instructorId

          if (!instructorIsTheOwner) {
            return next({
              path: '/' // Unauthorized
            })
          }

          return next() // OK, continue
        } catch (err) {
          console.error(err)

          // Future 404 page
          return next({
            path: '/'
          })
        }
      }
    },

    {
      path: '/courses/:courseId/enroll',
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
       beforeEnter: (_to, _from, next) => {
        const { isAuthenticated } = useAuthStore()

        if (isAuthenticated) {
          return next({
            path: '/'
          })
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
       beforeEnter: (_to, _from, next) => {
        const { isAuthenticated } = useAuthStore()

        if (isAuthenticated) {
          return next({
            path: '/'
          })
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
      component: ClassPageView
    }
  ]
})

router.beforeEach(async () => {
  const { getAuthenticatedUserData } = useAuthStore()
  await getAuthenticatedUserData()
})

export default router

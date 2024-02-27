<script lang="ts">
import ContentListWrapper from '@/components/UI/ContentListWrapper.vue';
import CourseCard from '@/components/UI/CourseCard.vue';
import DefaultList from '@/components/UI/DefaultList.vue';
import DefaultTitle from '@/components/UI/DefaultTitle.vue';
import type { ICourseWithInstructorAndEvaluationsAverage } from '@/interfaces/ICourseWithInstructorAndEvaluationsAverage';
import { api } from '@/lib/axios';
import { useAuthStore } from '@/stores/auth';

export default {
  components: {
    DefaultTitle,
    ContentListWrapper,
    DefaultList,
    CourseCard,
  },

  data() {
    const { user } = useAuthStore()

    const isAStudent = user?.role === 'STUDENT'

    return {
      recentCourses: [] as ICourseWithInstructorAndEvaluationsAverage[],
      studentCourses: [] as ICourseWithInstructorAndEvaluationsAverage[],
      instructorCourses: [] as ICourseWithInstructorAndEvaluationsAverage[],
      user,
      isAStudent
    }
  },

  mounted() {
    this.fetchRecentCourses()

    if (this.user && this.isAStudent) {
      this.fetchStudentCourses(this.user.id)
    } else if (this.user && !this.isAStudent) {
      this.fetchInstructorCourses(this.user.id)
    }
  },

  methods: {
    async fetchRecentCourses() {
      const response = await api.get<{ courses: ICourseWithInstructorAndEvaluationsAverage[] }>('/courses')
      this.recentCourses = response.data.courses
    },

    async fetchStudentCourses(studentId: string) {
      const response = await api.get<{ courses: ICourseWithInstructorAndEvaluationsAverage[] }>(`/students/${studentId}/enrollments`)
      this.studentCourses = response.data.courses
    },

    async fetchInstructorCourses(instructorId: string) {
      const response = await api.get<{ courses: ICourseWithInstructorAndEvaluationsAverage[] }>(`/instructors/${instructorId}/courses`)
      this.instructorCourses = response.data.courses
    },
  }
}
</script>

<template>
  <section id="home" class="px-4 pb-10">
    <article class="max-w-screen-2xl mx-auto max-sm:pt-12 pt-28 flex flex-col gap-8">
      <header>
        <DefaultTitle :text="`${user?.name ? `Bem vindo, ${user.name}` : 'Bem vindo!'}`" />
      </header>

      <main class="flex flex-col gap-9">
        <ContentListWrapper v-if="user" :title="`${isAStudent ? 'Continue de onde parou' : 'Seus cursos'}`">
          <DefaultList v-if="isAStudent && studentCourses.length > 0" class="justify-center xl:justify-start">
            <li class="w-full xs:w-auto" v-for="course in studentCourses" :key="course.course.id">
              <CourseCard :course="course" />
            </li>
          </DefaultList>

          <DefaultList v-else-if="instructorCourses.length > 0" class="justify-center xl:justify-start">
            <li class="w-full xs:w-auto" v-for="course in instructorCourses" :key="course.course.id">
              <CourseCard :course="course" />
            </li>
          </DefaultList>
        </ContentListWrapper>

        <ContentListWrapper title="Cursos recentes">
          <DefaultList class="justify-center xl:justify-start">
            <li class="w-full xs:w-auto" v-for="course in recentCourses" :key="course.course.id">
              <CourseCard :course="course" />
            </li>
          </DefaultList>
        </ContentListWrapper>
      </main>
    </article>
  </section>
</template>
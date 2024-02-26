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

    return {
      courses: [] as ICourseWithInstructorAndEvaluationsAverage[],
      user
    }
  },

  mounted() {
    this.fetchRecentCourses()
  },

  methods: {
    async fetchRecentCourses() {
      const response = await api.get<{ courses: ICourseWithInstructorAndEvaluationsAverage[] }>('/courses')
      this.courses = response.data.courses
    }
  }
}
</script>

<template>
  <section id="home" class="px-4 pb-10">
    <article class="max-w-screen-2xl mx-auto max-sm:pt-12 pt-28 flex flex-col gap-8">
      <header>
        <DefaultTitle :text="`Bem-vindo ${user?.name ?? '!'}`" />
      </header>

      <main class="flex flex-col gap-9">
        <!-- Authentication is required to get this data, so for now we will use the recent courses -->
        <ContentListWrapper title="Continue de onde parou">
          <DefaultList class="justify-center xl:justify-start">
            <li class="w-full xs:w-auto" v-for="course in courses" :key="course.course.id">
              <CourseCard :course="course" />
            </li>
          </DefaultList>
        </ContentListWrapper>

        <ContentListWrapper title="Cursos recentes">
          <DefaultList class="justify-center xl:justify-start">
            <li class="w-full xs:w-auto" v-for="course in courses" :key="course.course.id">
              <CourseCard :course="course" />
            </li>
          </DefaultList>
        </ContentListWrapper>
      </main>
    </article>
  </section>
</template>
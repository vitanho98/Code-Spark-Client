<script setup lang="ts">
import type { ICourse } from '@/interfaces/ICourse';
import DefaultLink from '../Navigation/DefaultLink.vue';
import Evaluation from '../UI/Evaluation.vue';

defineProps<{
  course: ICourse
}>()
</script>

<template>
  <router-link class="w-min" :to="`course/${course.id}`">
    <article
      class="bg-gray-800 rounded w-full sm:w-80 cursor-pointer hover:-translate-y-1 hover:shadow-2xl transition-all">
      <header>
        <img class="w-full object-cover rounded" :src="course.coverImageUrl" alt="Imagem do curso">
      </header>

      <main class="p-4 flex flex-col gap-3">
        <div>
          <h2 class="text-lg font-bold text-white">{{ course.title }}</h2>
          <DefaultLink :small="true" :text="course.instructor.name" :to="`/profile/${course.instructor.name}`" />
        </div>

        <Evaluation :active="course.evaluationAverage" :read-only="true" />
      </main>
    </article>
  </router-link>
</template>
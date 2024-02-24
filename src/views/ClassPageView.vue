<script setup lang="ts">
import ClassCard from '@/components/UI/ClassCard.vue';
import Evaluation from '@/components/UI/Evaluation.vue';
import type { IClass } from '@/interfaces/IClass';

const classes: IClass[] = [
  {
    id: 1,
    name: "Aula 01",
    completed: true,
  },
  {
    id: 2,
    name: "Aula 02",
    completed: false,
  },
  {
    id: 3,
    name: "Aula 03",
    completed: false,
  },
  {
    id: 4,
    name: "Aula 04",
    completed: false,
  },
  {
    id: 5,
    name: "Aula 05",
    completed: false,
  },
  {
    id: 6,
    name: "Aula 06",
    completed: false,
  },
  {
    id: 7,
    name: "Aula 07",
    completed: false,
  },
]
</script>

<template>
  <section class="flex justify-center w-full pt-10 sm:pt-28 pb-10 px-4">
    <main class="flex flex-col lg:flex-row gap-5">
      <div class="flex flex-col gap-5">
        <video controls class="w-full rounded">
          <source src="https://pub-5742bf476d414efdb9c0d7944f7333cb.r2.dev/Curso%20gratuito%20Vue.js%203%20INTRO%20
            ">
        </video>

        <div class="w-full bg-gray-800 flex flex-col lg:flex-row lg:justify-between gap-10 rounded p-5">
          <div class="flex flex-col gap-3">
            <a href="/" class="text-sm text-gray-300 underline underline-offset-4">HTML5 + CSS3</a>
            <h1 class="font-semibold text-xl">01 Aula de Introdução</h1>
            <p class="max-w-xl font-medium">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi neque fugiat id
              vitae eum facilis minus dolor eaque amet. Suscipit, voluptas et quisquam ad totam
              officiis illum blanditiis eveniet impedit optio explicabo rerum quasi beatae dolor est
              eligendi iste quam!
            </p>
          </div>

          <div class="flex flex-col items-center gap-2">
            <h1 class="font-semibold text-lg">Avaliar a Aula</h1>
            <Evaluation :length="5" :disabled="false" :read-only="false" :active="3" />
          </div>
        </div>
      </div>

      <aside class="w-full lg:w-96 max-h-[956px] bg-gray-800 overflow-scroll rounded">
        <ul class="flex flex-col gap-3 p-4">
          <li v-for="classToMap in classes" :key="classToMap.id">
            <ClassCard :classToRender="classToMap" />
          </li>
        </ul>
      </aside>
    </main>
  </section>
</template>

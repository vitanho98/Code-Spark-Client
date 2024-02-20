<script setup lang="ts">
import ContentListWrapper from '@/components/UI/ContentListWrapper.vue';
import CourseCard from '@/components/UI/CourseCard.vue';
import DefaultList from '@/components/UI/DefaultList.vue';
import DefaultTitle from '@/components/UI/DefaultTitle.vue';
import { type ICourse } from '../interfaces/ICourse';

const courses: ICourse[] = [
  {
    id: 1,
    title: 'Curso HTML topzera',
    instructor: {
      name: 'Deus Guanabara',
    },
    evaluationAverage: 4,
    coverImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOFh7xCIGCSBN8__k96Si5eSvu9ghDpcGF2g&usqp=CAU'
  },
  {
    id: 2,
    title: 'Curso HTML topzera',
    instructor: {
      name: 'Deus Guanabara',
    },
    evaluationAverage: 5,
    coverImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOFh7xCIGCSBN8__k96Si5eSvu9ghDpcGF2g&usqp=CAU'
  },
  {
    id: 3,
    title: 'Curso HTML topzera',
    instructor: {
      name: 'Deus Guanabara',
    },
    evaluationAverage: 5,
    coverImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOFh7xCIGCSBN8__k96Si5eSvu9ghDpcGF2g&usqp=CAU'
  },
  {
    id: 4,
    title: 'Curso HTML topzera',
    instructor: {
      name: 'Deus Guanabara',
    },
    evaluationAverage: 5,
    coverImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOFh7xCIGCSBN8__k96Si5eSvu9ghDpcGF2g&usqp=CAU'
  },
  {
    id: 5,
    title: 'Curso HTML topzera',
    instructor: {
      name: 'Deus Guanabara',
    },
    evaluationAverage: 5,
    coverImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOFh7xCIGCSBN8__k96Si5eSvu9ghDpcGF2g&usqp=CAU'
  },
  {
    id: 6,
    title: 'Curso HTML topzera',
    instructor: {
      name: 'Deus Guanabara',
    },
    evaluationAverage: 3,
    coverImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOFh7xCIGCSBN8__k96Si5eSvu9ghDpcGF2g&usqp=CAU'
  }
]

</script>

<template>
  <section id="home" class="px-6">
    <article class="max-w-screen-2xl mx-auto max-sm:pt-12 pt-28 flex flex-col gap-8">
      <header>
        <DefaultTitle text="Bem-vindo, Usuário" />
      </header>

      <main class="flex flex-col gap-9">
        <ContentListWrapper title="Continue de onde parou">
          <DefaultList class="justify-center xl:justify-start">
            <li v-for="course in courses" :key="course.id">
              <CourseCard :course="course" />
            </li>
          </DefaultList>
        </ContentListWrapper>

        <ContentListWrapper title="Cursos recentes">
          <DefaultList class="justify-center xl:justify-start">
            <li v-for="course in courses" :key="course.id">
              <CourseCard :course="course" />
            </li>
          </DefaultList>
        </ContentListWrapper>
      </main>
    </article>
  </section>
</template>
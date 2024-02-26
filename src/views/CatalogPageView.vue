<script setup lang="ts">
import CourseCard from '@/components/UI/CourseCard.vue';
import DefaultList from '@/components/UI/DefaultList.vue';
import DefaultTitle from '@/components/UI/DefaultTitle.vue';
import TagCourse from '@/components/UI/TagCourse.vue';
import SearchBar from '@/components/UI/SearchBar.vue'
import { type ICourse } from '@/interfaces/ICourse';
import { type ITag } from '@/interfaces/ITag';
import type { ICourseWithInstructorAndEvaluationsAverage } from '@/interfaces/ICourseWithInstructorAndEvaluationsAverage';

const tags: ITag[] = [
    {
        id: 1,
        name: 'Javascript'
    },
    {
        id: 2,
        name: 'Javascript'
    },
    {
        id: 3,
        name: 'Javascript'
    },
    {
        id: 4,
        name: 'Javascript'
    },
    {
        id: 5,
        name: 'Javascript'
    },
    {
        id: 6,
        name: 'Javascript'
    },
    {
        id: 7,
        name: 'Javascript'
    },
    {
        id: 8,
        name: 'Javascript'
    }

]

const courses: ICourseWithInstructorAndEvaluationsAverage[] = [

]
</script>

<template>
    <section id="catalog" class="px-6 pt-28">
        <div class="w-full">
            <article class="max-w-screen-2xl mx-auto flex flex-col gap-8">
                <header class="flex flex-col gap-4">
                    <div>
                        <DefaultTitle text="Catálogo" />
                        <span class="text-gray-200 text-lg font-light">Explore nosso vasto catálogo e encontre o melhor
                            curso
                            para
                            você</span>
                    </div>

                    <ul class="flex gap-2 pt-3">
                        <li v-for="tag in tags" :key="tag.id">
                            <TagCourse :tag="tag"></TagCourse>
                        </li>
                    </ul>
                </header>



                <main class="flex flex-col gap-9">
                    <div class="w-full">
                        <SearchBar text="O que você quer aprender?"></SearchBar>
                        <DefaultList :centered="true" class="py-10">
                            <li v-for="course in courses" :key="course.course.id">
                                <CourseCard :course="course" />
                            </li>
                        </DefaultList>
                    </div>
                </main>
            </article>
        </div>
    </section>
</template>


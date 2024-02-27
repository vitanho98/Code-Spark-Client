<script lang="ts">
import CourseCard from '@/components/UI/CourseCard.vue';
import DefaultList from '@/components/UI/DefaultList.vue';
import DefaultTitle from '@/components/UI/DefaultTitle.vue';
import EmptyList from '@/components/UI/EmptyList.vue';
import SearchBar from '@/components/UI/SearchBar.vue';
import TagCourse from '@/components/UI/TagCourse.vue';
import type { ICourseWithInstructorAndEvaluationsAverage } from '@/interfaces/ICourseWithInstructorAndEvaluationsAverage';
import { type ITag } from '@/interfaces/ITag';
import { fetchRecentCourses } from '@/services/fetchRecentCourses';
import { fetchRecentTags } from '@/services/fetchRecentTags';
import { queryCoursesByName } from '@/services/queryCoursesByName';
import { queryCoursesByTag } from '@/services/queryCoursesByTag';
import Carousel from 'primevue/carousel';

export default {
    components: {
        CourseCard,
        DefaultList,
        DefaultTitle,
        SearchBar,
        Carousel,
        TagCourse,
        EmptyList
    },

    data() {
        return {
            tags: [] as ITag[],
            courses: [] as ICourseWithInstructorAndEvaluationsAverage[],
            filteredCourses: [] as ICourseWithInstructorAndEvaluationsAverage[],
            searchBarText: '',
        }
    },

    mounted() {
        this.fetchRecentCourses()
        this.fetchRecentTags()
    },

    methods: {
        async fetchRecentCourses() {
            const response = await fetchRecentCourses()
            this.courses = response
            this.filteredCourses = response
        },

        async fetchRecentTags() {
            this.tags = await fetchRecentTags()
        },

        async handleSearchByName(query: string) {
            this.filteredCourses = await queryCoursesByName(query)
        },

        async handleSearchByTag(tag: string) {
            this.filteredCourses = await queryCoursesByTag(tag)
        }
    }
}
</script>

<template>
    <section id="catalog" class="px-4 pt-12 sm:pt-28">
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

                    <Carousel :value="tags" :circular="true" :num-scroll="1" :show-indicators="false"
                        :show-navigators="true" :num-visible="4" :responsive-options="[
                            {
                                breakpoint: '700px',
                                numVisible: 3,
                                numScroll: 1
                            },
                            {
                                breakpoint: '500px',
                                numVisible: 2,
                                numScroll: 1
                            },
                        ]">
                        <template #item="{ data }">
                            <TagCourse @search-by-click="handleSearchByTag" class="mx-1" :tag="data" />
                        </template>
                    </Carousel>
                </header>

                <main class="flex flex-col gap-9">
                    <SearchBar v-model="searchBarText" @search="handleSearchByName" placeholder="O que você quer aprender?">
                    </SearchBar>

                    <DefaultList v-if="filteredCourses.length > 0" :centered="true" class="py-10">
                        <li v-for="course in filteredCourses" :key="course.course.id">
                            <CourseCard :course="course" />
                        </li>
                    </DefaultList>

                    <EmptyList v-else />
                </main>
            </article>
        </div>
    </section>
</template>


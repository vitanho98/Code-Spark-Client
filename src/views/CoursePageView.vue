<script setup lang="ts">
import { type ITag } from '@/interfaces/ITag';
import TagCourse from '@/components/UI/TagCourse.vue';
import ProgressBar from 'primevue/progressbar';
import ModuleWrapper from '@/components/UI/ModuleWrapper.vue';
import { type IModule } from '@/interfaces/IModule';

const courseImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOFh7xCIGCSBN8__k96Si5eSvu9ghDpcGF2g&usqp=CAU'

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

const modules: IModule[] = [
    {
        id: 1,
        title: 'O que vamos aprender?',
        text: 'Lorem ipsum dolor sit amet, ipsum dolor sit amet consectetur adipiscing. Vitae semper quis lectus nulla at volutpat diam ut venenatis.'
    },
    {
        id: 2,
        title: 'O que vamos aprender?',
        text: 'Lorem ipsum dolor sit amet, ipsum dolor sit amet consectetur adipiscing. Vitae semper quis lectus nulla at volutpat diam ut venenatis.'
    },
    {
        id: 3,
        title: 'O que vamos aprender?',
        text: 'Lorem ipsum dolor sit amet, ipsum dolor sit amet consectetur adipiscing. Vitae semper quis lectus nulla at volutpat diam ut venenatis.'
    },
    {
        id: 4,
        title: 'O que vamos aprender?',
        text: 'Lorem ipsum dolor sit amet, ipsum dolor sit amet consectetur adipiscing. Vitae semper quis lectus nulla at volutpat diam ut venenatis.'
    },
    {
        id: 5,
        title: 'O que vamos aprender?',
        text: 'Lorem ipsum dolor sit amet, ipsum dolor sit amet consectetur adipiscing. Vitae semper quis lectus nulla at volutpat diam ut venenatis.'
    }

]
</script>

<template>
    <section class="flex gap-12 flex-col sm:pt-28 pb-10 md:px-16">
        <header class="w-full flex flex-col gap-12">
            <img class="w-full h-96 rounded object-cover" :src="courseImg" alt="Imagem do curso">
            <div class="flex flex-col gap-2">
                <h1 class="text-2xl font-semibold">HTML5 + CSS3</h1>
                <ul class="flex gap-2 pt-3">
                    <li v-for="tag in tags" :key="tag.id">
                        <TagCourse :tag="tag"></TagCourse>
                    </li>
                </ul>
            </div>
        </header>

        <main class="flex flex-col gap-10 relative">
            <div class="flex gap-12">
                <ul class="flex flex-col gap-4">
                    <li v-for="module in modules" :key="module.id"
                        class="flex flex-col bg-gray-800 max-w-4xl p-5 gap-2 relative rounded">
                        <ModuleWrapper :editable="false" :module="module"></ModuleWrapper>
                        <i
                            class="pi pi-check-circle text-2xl absolute -translate-x-1/2 -translate-y-1/2 top-1/2 -right-7"></i>
                    </li>
                </ul>

                <div class="bg-gray-800 w-120 p-5 sticky top-32 h-min rounded right-20">
                    <div class="flex flex-col gap-3">
                        <h1 class="font-medium text-xl">Progresso do curso</h1>
                        <div class="flex justify-center items-center gap-5">
                            <h2 class="flex-1">Aulas 20/25</h2>
                            <ProgressBar :value="80" :showValue="false" class="w-3/4 h-4" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </section>
</template>
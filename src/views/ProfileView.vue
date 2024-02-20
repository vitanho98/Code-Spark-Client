<script setup lang="ts">
import UserTag from '@/components/UI/UserTag.vue';
import type { ICourse } from '@/interfaces/ICourse';
import CourseCard from '@/components/UI/CourseCard.vue';
import DefaultTitle from '@/components/UI/DefaultTitle.vue';
import DefaultList from '@/components/UI/DefaultList.vue';

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
    <section>
        <article class="pt-28 max-w-screen-xl mx-auto flex flex-col gap-10">
            <header class="flex gap-10 flex-wrap justify-between">
                <div class="w-120 h-min p-5 flex flex-1 gap-7 bg-gray-800 rounded-lg">
                    <div class="flex flex-col gap-7 items-center">
                        <img src="../assets/img/backgroundImg.png" alt="Imagem do usuário" class="w-48 h-48 rounded">
                        <UserTag text="Student" />
                    </div>
                    <div class="flex flex-col items-start">
                        <h1 class="font-bold text-3xl">Nome Usuário</h1>
                        <h2 class="text-2xl">Email</h2>
                        <p class="text-lg">ArturPoffo@gmail.com</p>

                        <h2 class="text-2xl">Idade</h2>
                        <p class="text-lg">16</p>
                    </div>
                </div>

                <div class="flex flex-col gap-3">
                    <div class="w-96 p-5 flex justify-center bg-gray-800 rounded-lg">
                        <div class="flex flex-col gap-3">
                            <h1 class="text-2xl font-bold ">Biografia</h1>
                            <p class="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
                                asperiores
                                exercitationem qui est,
                                eos tempore accusamus optio quas culpa similique quibusdam accusantium! Perspiciatis earum
                                quae
                                reiciendis eveniet, velit eaque voluptatum? Autem quisquam fuga, id aperiam veniam ducimus
                                aut
                                temporibus, facilis, amet alias nesciunt fugiat accusamus beatae libero ullam consectetur
                                corporis.
                            </p>
                        </div>
                    </div>
                    <div class="w-96 bg-gray-800 h-min rounded">
                        <h1 class="font-bold text-2xl px-5">{{ courses.length }} Cursos Registrados</h1>
                    </div>
                </div>
            </header>

            <main class="flex flex-col gap-8">
                <header>
                    <DefaultTitle class="text-green-500" text="Inscrito em"></DefaultTitle>
                </header>

                <DefaultList :centered="true">
                    <li v-for="course in courses" :key="course.id">
                        <CourseCard :course="course" />
                    </li>
                </DefaultList>
            </main>
        </article>
    </section>
</template>

<script setup lang="ts">
import DefaultButton from '@/components/UI/DefaultButton.vue';


const courseImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOFh7xCIGCSBN8__k96Si5eSvu9ghDpcGF2g&usqp=CAU'
</script>

<template>
    <section class="flex gap-12 flex-col sm:pt-28 pb-10 md:px-16">
        <header class="w-full">
            <img class="w-full h-96 rounded object-cover" :src="courseImg" alt="Imagem do curso">
        </header>

        <main class="flex flex-col px-4 md:px-0 gap-10 2xl:flex-row items-center justify-between">
            <div class="max-w-4xl flex-col flex gap-6">
                <h1 class="font-righteous text-2xl text-green-500">Curso de HTML</h1>
                <p class="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate recusandae quod
                    voluptate
                    explicabo.
                    Dicta ad tempora quas provident. Voluptate dignissimos quidem sequi voluptatibus reiciendis quibusdam
                    quaerat pariatur tenetur suscipit dicta repudiandae accusantium soluta ipsa libero est veritatis dolor
                    sint
                    nostrum, accusamus, eum numquam doloribus quam! Hic sunt dolorem et harum.</p>
                <DefaultButton text="Inscreva-se" />
            </div>

            <div class="bg-gray-800 w-80 rounded p-5 box-border">
                <ul class="flex gap-5 flex-wrap justify-center">
                    <li class="flex flex-col text-center gap-1">
                        <div class="bg-gray-500 w-20 h-16 rounded flex justify-center items-center">
                            <i class="pi pi-clock"></i>
                        </div>
                        <span>40 Horas</span>
                    </li>
                    <li class="flex flex-col text-center gap-1">
                        <div class="bg-gray-500 w-20 h-16 rounded flex justify-center items-center">
                            <i class="pi pi-desktop"></i>
                        </div>
                        <span>25 Aulas</span>
                    </li>
                    <li class="flex flex-col text-center gap-1">
                        <div class="bg-gray-500 w-20 h-16 rounded flex justify-center items-center">
                            <i class="pi pi-calendar"></i>
                        </div>
                        <span>28/02/24</span>
                    </li>
                    <li class="flex flex-col text-center gap-1">
                        <div class="bg-gray-500 w-20 h-16 rounded flex justify-center items-center">
                            <i class="pi pi-check-circle"></i>
                        </div>
                        <span>Certificado</span>
                    </li>
                    <li class="flex flex-col text-center gap-1">
                        <div class="bg-gray-500 w-20 h-16 rounded flex justify-center items-center">
                            <i class="pi pi-shopping-cart"></i>
                        </div>
                        <span>Gratuito</span>
                    </li>
                    <li class="flex flex-col text-center gap-1">
                        <div class="bg-gray-500 w-20 h-16 rounded flex justify-center items-center">
                            <i class="pi pi-file-edit"></i>
                        </div>
                        <span>Atividades</span>
                    </li>
                </ul>
            </div>
        </main>
    </section>
</template>

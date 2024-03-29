<script setup lang="ts">
import DefaultButton from '@/components/UI/DefaultButton.vue';
import type { ICourse } from '@/interfaces/ICourse';
import { type ICourseStats } from '@/interfaces/ICourseStats';
import router from '@/router';
import { enrollToCourse } from '@/services/enrollToCourse';
import { getCourseDetails } from '@/services/getCourseDetails';
import { getCourseStats } from '@/services/getCourseStats';
import { getEnrollmentDetails } from '@/services/getEnrollmentDetails';
import { useAuthStore } from '@/stores/auth';
import { onMounted, ref, type Ref } from 'vue';

const { user, isAuthenticated } = useAuthStore()

const isSubmitting = ref(false)
const isDisabledToSubmit = ref(false)

const courseId = router.currentRoute.value.params.courseId as string

const course: Ref<ICourse | null> = ref(null)
const courseStats: Ref<ICourseStats | null> = ref(null)

onMounted(async () => {
    if (user && user.role === 'INSTRUCTOR') {
        isDisabledToSubmit.value = true
    }

    try {
        const studentAlreadyEnrolledIn = await getEnrollmentDetails(courseId, user?.id ?? '')

        if (studentAlreadyEnrolledIn) {
            router.push('/coursepage')
        }

        const courseToGetDetails = await getCourseDetails(courseId)
        const stats = await getCourseStats(courseId)

        course.value = courseToGetDetails
        courseStats.value = stats
    } catch (err) {
        console.error(err)
    }
})

async function handleEnrollToCourse() {
    isSubmitting.value = true

    try {
        if (!isAuthenticated) {
            router.push('/signin')
        }

        await enrollToCourse(courseId)
        router.push('/coursepage')
    } catch (err) {
        console.error(err)
        isSubmitting.value = false
    }
}
</script>

<template>
    <section v-if="course" class="flex gap-12 flex-col sm:pt-28 pb-10 md:px-16">
        <header class="w-full">
            <img class="w-full h-96 rounded object-cover" :src="course?.bannerImageKey" alt="Imagem do curso">
        </header>

        <main class="flex flex-col px-4 md:px-0 gap-10 2xl:flex-row items-center justify-between">
            <div class="max-w-4xl flex-col flex gap-6">
                <h1 class="font-righteous text-2xl text-green-500">{{ course?.name }}</h1>
                <p class="text-lg">{{ course?.description }}</p>
                <DefaultButton @click="handleEnrollToCourse" :disabled="isDisabledToSubmit || isSubmitting"
                    text="Inscreva-se" />
            </div>

            <div class="bg-gray-800 w-80 rounded p-5 box-border">
                <ul class="flex flex-col gap-5 justify-center">
                    <div class="flex justify-center gap-5">
                        <li class="flex flex-col text-center gap-1">
                            <div class="bg-gray-500 w-20 h-16 rounded flex justify-center items-center">
                                <i class="pi pi-clock"></i>
                            </div>
                            <span>{{ courseStats?.duration }}</span>
                        </li>
                        <li class="flex flex-col text-center gap-1">
                            <div class="bg-gray-500 w-20 h-16 rounded flex justify-center items-center">
                                <i class="pi pi-desktop"></i>
                            </div>
                            <span>{{ courseStats?.numberOfClasses }} Aulas</span>
                        </li>
                        <li class="flex flex-col text-center gap-1">
                            <div class="bg-gray-500 w-20 h-16 rounded flex justify-center items-center">
                                <i class="pi pi-calendar"></i>
                            </div>
                            <span>{{ course?.createdAt.toLocaleDateString() }}</span>
                        </li>
                    </div>

                    <div class="flex justify-center gap-5">
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
                    </div>
                </ul>
            </div>
        </main>
    </section>
</template>

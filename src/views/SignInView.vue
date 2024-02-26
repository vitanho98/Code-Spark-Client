<script setup lang="ts">
import DefaultButton from '@/components/UI/DefaultButton.vue';
import DefaultInput from '@/components/UI/DefaultInput.vue';
import { api } from '@/lib/axios';
import router from '@/router';
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';

const isSubmitting = ref(false)

const { getAuthenticatedUserData } = useAuthStore()

const formData = {
    email: '',
    password: '',
}

async function handleSignInUser() {
    isSubmitting.value = true

    try {
        await api.post('/sessions', {
            ...formData
        })

        await getAuthenticatedUserData()

        router.push('/')
    } catch (err) {
        console.error(err)
        isSubmitting.value = false
    }
}
</script>

<template>
    <section class="flex px-4 md:px-0 items-center h-screen overflow-hidden relative">
        <div class="w-min md:w-1/2 h-full flex items-center justify-center md:relative">
            <img class="w-full opacity-50 h-full object-cover absolute top-0 left-0"
                src="../assets/img/backgroundImgSingIn.jpg" alt="Imagem ilustrativa">

            <div class="hidden md:flex flex-col items-center justify-center z-50">
                <h1 class="text-green-500 underline text-2xl font-righteous">CodeSpark</h1>
                <span class="text-lg">Entre com sua conta e explore!</span>
            </div>
        </div>

        <div
            class="w-full h-min p-10 md:p-4 rounded md:w-1/2 md:h-full flex flex-col items-center justify-center gap-4 z-50">
            <form @submit.prevent="handleSignInUser" class="w-full max-w-xl flex flex-col gap-5">
                <DefaultInput v-model="formData.email" required type="email" placeholder="Digite seu email" />
                <DefaultInput v-model="formData.password" required type="password" placeholder="Digite sua senha" />

                <DefaultButton class="w-full" text="Entrar" />
            </form>

            <span class="text-lg text-center">Não tem uma conta? <a href="/signup"
                    class="text-green-200">Registre-se!</a></span>
        </div>
    </section>
</template>
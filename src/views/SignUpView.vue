<script setup lang="ts">
import DefaultButton from '@/components/UI/DefaultButton.vue';
import DefaultInput from '@/components/UI/DefaultInput.vue';
import DefaultTextArea from '@/components/UI/DefaultTextArea.vue';
import { api } from '@/lib/axios';
import router from '@/router';
import RadioButton from 'primevue/radiobutton';
import { ref } from 'vue';

const isAStudent = ref(true)
const isSubmitting = ref(false)

const formData = {
    name: '',
    email: '',
    password: '',
    cpf: '',
    role: isAStudent.value ? 'STUDENT' : 'INSTRUCTOR',
    age: '' as string,
    summary: ''
}

async function handleRegisterUser() {
    isSubmitting.value = true

    try {
        await api.post('/users', {
            ...formData,
            age: parseInt(formData.age)
        })

        await router.push('/signin')
    } catch (err) {
        console.error(err)
        isSubmitting.value = false
    }
}
</script>

<template>
    <section class="flex px-4 md:px-0 items-center min-h-screen md:h-screen relative">
        <div class="w-min md:w-1/2 h-full flex items-center justify-center md:relative">
            <img class="w-full opacity-50 h-full object-cover absolute top-0 left-0" src="../assets/img/backgroundImg.png"
                alt="Imagem ilustrativa">

            <div class="hidden md:flex flex-col items-center justify-center z-50">
                <h1 class="text-green-500 underline text-2xl font-righteous">CodeSpark</h1>
                <span class="text-lg">Cadastre-se e explore!</span>
            </div>
        </div>

        <div
            class="w-full h-min p-10 md:p-4 rounded md:w-1/2 md:h-full flex flex-col items-center justify-center gap-4 z-50">
            <form @submit.prevent="handleRegisterUser" class="w-full max-w-xl flex flex-col gap-4">
                <DefaultInput v-model="formData.name" required type="text" placeholder="Digite seu nome" />
                <DefaultInput v-model="formData.email" required type="email" placeholder="Digite seu email" />
                <DefaultInput v-model="formData.password" required type="password" placeholder="Digite sua senha" />
                <DefaultInput v-model="formData.age" required type="number" placeholder="Sua idade" />
                <DefaultInput v-model="formData.cpf" required type="text" placeholder="Digite seu CPF" />
                <DefaultTextArea v-model="formData.summary" required type="text"
                    placeholder="Digite uma breve descrição sobre você" />

                <div class="flex items-center justify-center sm:justify-start gap-4 my-6">
                    <div class="flex items-center gap-2">
                        <label for="isStudent">Estudante</label>
                        <RadioButton v-model="isAStudent" inputId="isStudent" name="role" :value="true" />
                    </div>

                    <div class="flex items-center gap-2">
                        <label for="isInstructor">Instrutor</label>
                        <RadioButton v-model="isAStudent" inputId="isInstructor" name="role" :value="false" />
                    </div>
                </div>

                <DefaultButton class="w-full" text="Cadastre-se" :disabled="isSubmitting" />
            </form>

            <span class="text-lg text-center">Já tem uma conta? <a href="/signin" class="text-green-200">Entrar!</a></span>
        </div>
    </section>
</template>
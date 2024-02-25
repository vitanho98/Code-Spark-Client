<script setup lang="ts">
import DefaultButton from '@/components/UI/DefaultButton.vue';
import DefaultInput from '@/components/UI/DefaultInput.vue';
import DefaultTextArea from '@/components/UI/DefaultTextArea.vue';
import FormPageTemplate from '@/components/UI/FormPageTemplate.vue';
import { api } from '@/lib/axios';
import router from '@/router';
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';

const { user } = useAuthStore()
const isSubmitting = ref(false)

if (!user || user.role !== 'INSTRUCTOR') {
  router.push('/')
}

const formData = {
  name: '',
  description: ''
}

async function handleRegisterCourse() {
  isSubmitting.value = true

  try {
    await api.post('/courses', {
      ...formData
    })
    router.push('/')
  } catch (err) {
    console.error(err)
    isSubmitting.value = false
  }
}
</script>

<template>
  <FormPageTemplate title="Registrar curso">
    <form @submit.prevent="handleRegisterCourse" class="w-full max-w-xl flex flex-col gap-4">
      <DefaultInput v-model="formData.name" type="text" placeholder="Nome do curso" />
      <DefaultTextArea v-model="formData.description" type="text" placeholder="Uma breve descrição sobre o curso" />

      <strong class="text-center my-4">Você poderá adicionar mais informações, como imagens e módulos, na página de
        configurações do curso, após o
        registro</strong>

      <DefaultButton text="Registrar curso" :disabled="isSubmitting" />
    </form>
  </FormPageTemplate>
</template>
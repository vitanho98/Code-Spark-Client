<script setup lang="ts">
import DefaultButton from '@/components/UI/DefaultButton.vue';
import DefaultInput from '@/components/UI/DefaultInput.vue';
import DefaultTextArea from '@/components/UI/DefaultTextArea.vue';
import FormPageTemplate from '@/components/UI/FormPageTemplate.vue';
import { api } from '@/lib/axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const courseId = router.currentRoute.value.params.courseId as string

const isSubmitting = ref(false)

const formData = {
  name: '',
  description: '',
  moduleNumber: ''
}

async function handleRegisterCourse() {
  isSubmitting.value = true

  try {
    await api.post(`/courses/${courseId}/modules`, {
      ...formData,
      moduleNumber: parseInt(formData.moduleNumber)
    })

    router.push('/')
  } catch (err) {
    console.error(err)
    isSubmitting.value = false
  }
}
</script>

<template>
  <FormPageTemplate title="Adicionar módulo">
    <form @submit.prevent="handleRegisterCourse" class="w-full max-w-xl flex flex-col gap-4">
      <DefaultInput v-model="formData.name" type="text" placeholder="Nome do módulo" />
      <DefaultTextArea v-model="formData.description" type="text" placeholder="Uma breve descrição sobre o módulo" />
      <DefaultInput v-model="formData.moduleNumber" type="number"
        placeholder="Número do módulo, responsável pela ordem de exibição" />

      <strong class="text-center my-4">Você poderá adicionar aulas a este módulo na página de
        configurações do módulo, após o
        registro</strong>

      <DefaultButton text="Adicionar módulo" :disabled="isSubmitting" />
    </form>
  </FormPageTemplate>
</template>
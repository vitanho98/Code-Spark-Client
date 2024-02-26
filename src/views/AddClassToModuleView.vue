<script setup lang="ts">
import DefaultButton from '@/components/UI/DefaultButton.vue';
import DefaultInput from '@/components/UI/DefaultInput.vue';
import DefaultTextArea from '@/components/UI/DefaultTextArea.vue';
import FormPageTemplate from '@/components/UI/FormPageTemplate.vue';
import UploadFileInput from '@/components/UI/UploadFileInput.vue';
import { api } from '@/lib/axios';
import type { FileUploadSelectEvent } from 'primevue/fileupload';
import { ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const moduleId = router.currentRoute.value.params.moduleId as string

const isSubmitting = ref(false)

const video: Ref<File | null> = ref(null)
const formData = {
  name: '',
  description: '',
  classNumber: ''
}

function handleSelectedFile(selectedEvent: FileUploadSelectEvent) {
  const { files } = selectedEvent

  if (files.length > 0) {
    video.value = files[0] as File
  }
}

async function handleAddClassToModule() {
  isSubmitting.value = true

  try {
    if (!video.value) {
      throw new Error('Video is required')
    }

    const uploadFormData = new FormData();
    uploadFormData.append('file', video.value);

    const { data: { file } } = await api.post<{ file: { id: string } }>('/files', uploadFormData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    await api.post(`/modules/${moduleId}/classes/video/${file.id}`, {
      ...formData,
      classNumber: parseInt(formData.classNumber),
    })

    router.push('/')
  } catch (err) {
    console.error(err)
    isSubmitting.value = false
  }
}
</script>

<template>
  <FormPageTemplate title="Adicionar aula">
    <form @submit.prevent="handleAddClassToModule" class="w-full max-w-xl flex flex-col gap-5">
      <DefaultInput v-model="formData.name" type="text" label="Nome da aula" placeholder="Nome da aula" />
      <DefaultTextArea v-model="formData.description" type="text" label="Descrição da aula"
        placeholder="Uma breve descrição sobre a aula" />
      <DefaultInput v-model="formData.classNumber" type="number" label="Número da aula"
        placeholder="Número da aula, responsável pela ordem de exibição" />

      <UploadFileInput label="Vídeo da aula" @file-selected="handleSelectedFile"
        :accept-type="'video/mp4,video/x-msvideo,video/avi'" />

      <DefaultButton text="Adicionar aula" :disabled="isSubmitting" />
    </form>
  </FormPageTemplate>
</template>
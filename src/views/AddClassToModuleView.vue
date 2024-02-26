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

    const { data: { file } } = await api.post<{ file: { fileKey: string } }>('/files', uploadFormData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    // FIXME: Returns a 404 not found error, even though it uploaded correctly and has the correct file key
    const { data: { video: uploadedVideo } } = await api.get<{ video: { id: string } }>(`/videos/${file.fileKey}`)

    await api.post(`/modules/${moduleId}/classes/video/${uploadedVideo.id}`, {
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
    <form @submit.prevent="handleAddClassToModule" class="w-full max-w-xl flex flex-col gap-4">
      <DefaultInput v-model="formData.name" type="text" placeholder="Nome da aula" />
      <DefaultTextArea v-model="formData.description" type="text" placeholder="Uma breve descrição sobre o aula" />
      <DefaultInput v-model="formData.classNumber" type="number"
        placeholder="Número da aula, responsável pela ordem de exibição" />

      <UploadFileInput @file-selected="handleSelectedFile" :accept-type="'video/mp4,video/x-msvideo,video/avi'" />

      <DefaultButton text="Adicionar aula" :disabled="isSubmitting" />
    </form>
  </FormPageTemplate>
</template>
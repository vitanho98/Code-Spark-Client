<script setup lang="ts">
import DefaultButton from '@/components/UI/DefaultButton.vue';
import DefaultInput from '@/components/UI/DefaultInput.vue';
import DefaultTextArea from '@/components/UI/DefaultTextArea.vue';
import FormPageTemplate from '@/components/UI/FormPageTemplate.vue';
import UploadFileInput from '@/components/UI/UploadFileInput.vue';
import type { IClass } from '@/interfaces/IClass';
import { api } from '@/lib/axios';
import type { FileUploadSelectEvent } from 'primevue/fileupload';
import { onMounted, ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const classId = router.currentRoute.value.params.classId as string

const isSubmitting = ref(false)

const video: Ref<File | null> = ref(null)
const originalClass: Ref<IClass | null> = ref(null)
const formData = ref({
  name: '',
  description: '',
  videoId: '',
  classNumber: null as number | null,
})

onMounted(async () => {
  try {
    const { data } = await api.get<{ class: IClass }>(`/classes/${classId}`)

    originalClass.value = data.class

    formData.value = {
      name: data.class.name ?? '',
      description: data.class.description ?? '',
      videoId: data.class.videoId ?? '',
      classNumber: data.class.classNumber ?? null,
    }
  } catch (err) {
    console.error(err)
    router.push('/') // Not found
  }
})

function handleSelectedFile(selectedEvent: FileUploadSelectEvent) {
  const { files } = selectedEvent

  if (files.length > 0) {
    video.value = files[0] as File
  }
}

function handleClearFile() {
  video.value = null
  formData.value.videoId = originalClass.value?.videoId ?? ''
}

async function handleEditClassDetails() {
  isSubmitting.value = true

  try {
    if (video.value) {
      const { data: { file } } = await api.post<{ file: { id: string } }>('/files', {
        file: video.value
      }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      formData.value.videoId = file.id
    }

    await api.put(`/classes/${classId}`, {
      name: originalClass.value?.name !== formData.value.name ? formData.value.name : undefined,
      description: originalClass.value?.description !== formData.value.description ? formData.value.description : undefined,
      classNumber: originalClass.value?.classNumber !== formData.value.classNumber ? Number(formData.value.classNumber) : undefined,
      videoId: originalClass.value?.videoId !== formData.value.videoId ? formData.value.videoId : undefined,
    })

    router.push('/')
  } catch (err) {
    console.error(err)
    isSubmitting.value = false
  }
}
</script>

<template>
  <FormPageTemplate title="Editar aula">
    <form @submit.prevent="handleEditClassDetails" class="w-full max-w-xl flex flex-col gap-5">
      <DefaultInput v-model="formData.name" type="text" label="Nome da aula" placeholder="Nome da aula" />
      <DefaultTextArea v-model="formData.description" type="text" label="Descrição da aula"
        placeholder="Uma breve descrição sobre a aula" />
      <DefaultInput v-model="formData.classNumber" type="number" label="Número da aula"
        placeholder="Número da aula, responsável pela ordem de exibição" />

      <UploadFileInput label="Novo vídeo da aula" @file-clear="handleClearFile" @file-selected="handleSelectedFile"
        :accept-type="'video/mp4,video/x-msvideo,video/avi'" />

      <DefaultButton text="Salvar" :disabled="isSubmitting" />
    </form>
  </FormPageTemplate>
</template>
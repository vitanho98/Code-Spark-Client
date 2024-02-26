<script setup lang="ts">
import FileUpload, { type FileUploadSelectEvent } from 'primevue/fileupload';
import 'primevue/resources/themes/aura-dark-green/theme.css';

const emit = defineEmits<{
  "file-selected": [value: FileUploadSelectEvent]
}>()

function handleFileSelected(event: FileUploadSelectEvent) {
  emit('file-selected', event)
}

defineProps<{
  acceptType: 'image/png,image/jpeg' | 'video/mp4,video/x-msvideo,video/avi' | 'image/png,image/jpeg,video/mp4,video/x-msvideo,video/avi'
}>()
</script>

<template>
  <FileUpload name="file" :auto="false" :show-upload-button="false" :cancel-label="'Remover'"
    :invalid-file-type-message="'Formato inválido, formatos aceitos: JPEG e PNG para imagem, MP4 e AVI para vídeo'"
    :accept="acceptType" :multiple="false" :file-limit="1" :choose-label="'Buscar'" @select="handleFileSelected">
    <template #content="{ files: [file] }">
      <article class="flex flex-col gap-5" v-if="file">
        <header>
          <h3 class="text-green-500 font-bold">Lista para upload:</h3>
        </header>

        <main>
          {{ file.name }}
        </main>
      </article>
    </template>

    <template #empty>
      <p class="text-gray-300 font-bold">Arraste e solte o arquivo aqui para preparar o upload.</p>
    </template>
  </FileUpload>
</template>
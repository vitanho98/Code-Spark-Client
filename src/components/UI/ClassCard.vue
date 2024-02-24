<script setup lang="ts">
import type { IClass } from '@/interfaces/IClass';

defineProps<{
  classToRender: IClass
}>()
</script>

<template>
  <article class="w-full p-5 rounded bg-gray-500 flex items-center gap-2 cursor-pointer">
    <button>
      <i :class="`pi pi-check ${classToRender.completed ? 'text-green-500' : 'text-gray-300'}`"></i>
    </button>

    <span :class="`${classToRender.completed ? 'text-green-500' : 'text-gray-200'} font-bold`">{{ classToRender.name
    }}</span>
  </article>
</template>
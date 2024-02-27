<script setup lang="ts">
defineProps<{
  text: string
  disabled?: boolean
}>()

const emit = defineEmits<{
  click: []
}>()

function handleClick() {
  emit('click')
}
</script>

<template>
  <button @click="handleClick" :disabled="disabled"
    class="bg-green-500 rounded flex justify-center items-center cursor-pointer p-2 hover:opacity-80 disabled:opacity-80 disabled:cursor-not-allowed transition-opacity">
    <span class="text-white text-center font-roboto font-semibold">{{ text }}</span>
  </button>
</template>
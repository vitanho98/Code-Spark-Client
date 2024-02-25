<script setup lang="ts">
defineProps<{
  text: string
  disabled?: boolean
}>()
</script>

<template>
  <button :disabled="disabled"
    class="bg-green-500 rounded flex justify-center items-center cursor-pointer p-2 hover:opacity-80 disabled:opacity-80 disabled:cursor-not-allowed transition-opacity">
    <span class="text-white text-center font-roboto font-semibold">{{ text }}</span>
  </button>
</template>
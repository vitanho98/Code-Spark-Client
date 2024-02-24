<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <button
    class="bg-green-500 rounded flex justify-center items-center cursor-pointer p-2 hover:opacity-80 transition-opacity">
    <span class="text-white text-center font-roboto font-semibold">{{ text }}</span>
  </button>
</template>
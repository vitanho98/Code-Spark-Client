<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <div class="bg-green-500 rounded flex justify-center cursor-pointer h-12">
    <h1 class="flex items-center text-xl text-white font-roboto font-semibold">{{ text }}</h1>
  </div>
</template>
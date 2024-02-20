<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <h1 class="text-xl text-green-500 font-righteous md:text-2xl">{{ text }}</h1>
</template>
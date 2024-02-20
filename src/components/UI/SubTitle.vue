<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <h2 class="text-white text-lg font-light">{{ text }}</h2>
</template>
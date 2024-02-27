<script setup lang="ts">
defineProps<{
    text: 'ESTUDANTE' | 'INSTRUTOR'
}>()
</script>

<template>
    <h1 class="w-44 text-white text-center font-semibold rounded text-xl bg-green-500">{{ text }}</h1>
</template>
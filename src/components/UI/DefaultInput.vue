<script setup lang="ts">
defineProps<{
    placeholder: string,
    type: string
}>()
</script>

<template>
    <input class="w-full py-2 px-3 text-lg rounded bg-gray-800 pl-4" :type="type" :placeholder="placeholder">
</template>
<script setup lang="ts">
defineProps<{
    placeholder: string,
    type: string
}>()
</script>

<template>
    <div class="flex flex-col justify-center items-center">
        <input class="w-96 h-12 text-lg rounded bg-gray-800 pl-4" :type="type" :placeholder="placeholder">
    </div>
</template>
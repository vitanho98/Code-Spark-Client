<script setup lang="ts">

defineProps<{
    text: string
}>()
</script>

<template>
    <div class="flex items-center gap-2 bg-gray-800 rounded w-full py-2.5">
        <i class="pi pi-search text-gray-300 px-3"></i>
        <input class="text-md px-0.5 bg-gray-800 w-full border-0 outline-none text-gray-300 placeholder:text-gray-300 flex"
            type="text" :placeholder="text">
    </div>
</template>
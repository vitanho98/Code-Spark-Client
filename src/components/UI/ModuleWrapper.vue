<script setup lang="ts">
import { type IModule } from '@/interfaces/IModule';

defineProps<{
    module: IModule
}>()
</script>

<template>
    <article class="py-1">
    <div class="h-auto py-3 w-full rounded-xl bg-gray-800">
        <span class="font-semibold text-white text-xl py-5 px-6">{{ module.title }}</span>
        <p class="text-md text-gray-300 py-1 px-6">{{ module.text }}</p>
    </div>
</article>
</template>
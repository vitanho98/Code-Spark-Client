<script setup lang="ts">
import { type IModule } from '@/interfaces/IModule';
import DeleteModuleButton from './DeleteModuleButton.vue';
import EditModuleButton from './EditModuleButton.vue';

defineProps<{
    module: IModule
    editable: boolean
}>()
</script>

<template>
    <article class="py-1">
    <div class="h-auto py-3 w-full rounded-xl bg-gray-800">
        <span class="font-semibold text-white text-xl py-5 px-6">{{ module.title }}</span>
        <div class="flex justify-end px-4 gap-2 items-end">
            <p class="text-md text-gray-300 py-1 px-2">{{ module.text }}</p>
            <DeleteModuleButton :class="`${editable}`"></DeleteModuleButton>
            <EditModuleButton :class="`${editable}`"></EditModuleButton>
        </div>
    </div>
</article>
</template>
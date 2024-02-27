<script setup lang="ts">
import { type ITag } from '@/interfaces/ITag';

const { tag } = defineProps<{
    tag: ITag
}>()

const emit = defineEmits<{
    searchByClick: [value: string]
}>()

function handleSearchByClick() {
    emit('searchByClick', tag.value)
}
</script>

<template>
    <div @click="handleSearchByClick" class="bg-gray-800 rounded cursor-pointer flex py-2 px-4 items-center justify-center">
        <span class="text-white font-bold text-center">{{ tag.value }}</span>
    </div>
</template>
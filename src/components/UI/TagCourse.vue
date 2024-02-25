<script setup lang="ts">
import { type ITag } from '@/interfaces/ITag';

defineProps<{
    tag: ITag
}>()
</script>

<template>
    <article class="bg-gray-800 rounded cursor-pointer flex py-2 px-14">
        <span class="text-white size-4.5">{{ tag.name }}</span>
    </article>
</template>
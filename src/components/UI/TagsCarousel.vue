<script setup lang="ts">
import type { ITag } from '@/interfaces/ITag';
import Carousel from 'primevue/carousel';
import TagCourse from './TagCourse.vue';

defineProps<{
  tags: ITag[],
  handleSearchByTag?: (tag: string) => Promise<void>
}>()
</script>

<template>
  <Carousel :value="tags" :circular="true" :num-scroll="1" :show-indicators="false" :show-navigators="true"
    :num-visible="4" :responsive-options="[
      {
        breakpoint: '700px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '500px',
        numVisible: 2,
        numScroll: 1
      },
    ]">
    <template #item="{ data }">
      <TagCourse @search-by-click="handleSearchByTag" class="mx-1" :tag="data" />
    </template>
  </Carousel>
</template>
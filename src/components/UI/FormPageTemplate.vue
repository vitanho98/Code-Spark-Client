<script setup lang="ts">
import DefaultTitle from './DefaultTitle.vue';

defineProps<{
  title: string
}>()
</script>

<template>
  <section class="pt-10 sm:pt-28 pb-10 px-4 flex flex-col items-center gap-20">
    <DefaultTitle :text="title" />

    <!-- Form space -->
    <slot></slot>
  </section>
</template>
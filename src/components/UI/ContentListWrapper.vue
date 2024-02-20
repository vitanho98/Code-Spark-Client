<script setup lang="ts">
import SubTitle from './SubTitle.vue';

defineProps<{
  title: string
}>()
</script>

<template>
  <section class="flex flex-col gap-9">
    <header>
      <SubTitle :text="title" />
    </header>

    <main class="md:px-8">
      <slot></slot>
    </main>
  </section>
</template>
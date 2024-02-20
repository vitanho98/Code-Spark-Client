<script setup lang="ts">
defineProps<{
  centered?: boolean
}>()
</script>

<template>
  <ul :class="`w-full flex items-start ${centered && 'justify-center'} gap-8 flex-wrap`">
    <slot></slot>
  </ul>
</template>
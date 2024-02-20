<script setup lang="ts">
defineProps<{
  text: string
  to: string
  small?: boolean
}>()
</script>

<template>
  <router-link :to="to"
    :class="`${small && 'text-sm'} text-green-200 underline underline-offset-2 hover:opacity-80 transition-opacity`">
    {{
      text
    }}
  </router-link>
</template>
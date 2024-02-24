<script setup lang="ts">
import Rating from 'primevue/rating';
import { ref } from 'vue';

const { active, length, readOnly, disabled } = defineProps<{
  length?: number,
  readOnly?: boolean,
  disabled?: boolean,
  active: number
}>()

const localActive = ref(active)
</script>

<template>
  <Rating v-model="localActive" class="flex gap-2 text-green-200" :stars="length ?? 5" :readonly="readOnly"
    :disabled="disabled" :cancel="false">
  </Rating>
</template>
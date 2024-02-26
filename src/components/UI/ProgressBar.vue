<script setup lang="ts">
import ProgressBar from 'primevue/progressbar';

const { value, showValue } = defineProps<{
    value: number,
    showValue: boolean
}>()
</script>

<template>
    <ProgressBar :value="value" :showValue="showValue" />
</template>
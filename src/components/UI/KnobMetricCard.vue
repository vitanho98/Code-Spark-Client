<script setup lang="ts">
import Knob from 'primevue/knob'

defineProps<{
    metricTitle: string
    icon?: string
    metricName?: string
    metricDescription: string
    value: number | string
}>()
</script>

<template>
<article class="w-80 h-60 bg-gray-800/10 rounded-lg bg-gradient-to-br from-gray-800/10 from-60% to-100% to-green-500 flex flex-col items-center">
    <h2 class=" pt-4  font-medium text-xl font-roboto text-white pb-5">{{ metricTitle }}</h2>
    <Knob :v-model="value" :size="140" :strokeWidth="15" :valueTemplate.rangeColor="`${value}%`"  :valueColor="`SlateGray`" :rangeColor="`MediumTurquoise`"></Knob>

    <div class="flex flex-col px-3">
        <span class="font-medium text-2xl text-white">{{ metricName }}</span>
        <span class="font-medium text-sm text-gray-200">{{ metricDescription }}</span>
    </div>
</article>
</template>
<script setup lang="ts">



defineProps<{
    metricTitle: string
    icon: string
    metricName: string
    metricDescription: string
}>()
</script>

<template>
    <article class="w-80 h-60 bg-gray-800/10 rounded-lg bg-gradient-to-br from-gray-800/10 from-60% to-100% to-green-500">
        <h2 class="px-3 pt-5 font-medium text-xl font-roboto text-white">{{ metricTitle }}</h2>
        <aside class="px-3 pt-10 pb-5">
            <div class="w-14 h-12 bg-gray-800/80 rounded-xl items-center flex justify-center">
                <i :class="`${icon}`" style="color:rgb(152 255 152); font-size: 1.5rem ;"></i>
            </div>
        </aside>

        

        <div class="flex flex-col px-3">
            <span class="font-medium text-2xl text-white">{{ metricName }}</span>
            <span class="font-medium text-sm text-gray-200">{{ metricDescription }}</span>
        </div>
    </article>
</template>
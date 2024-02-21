<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
    <ul class="w-72">
        <li class="bg-gray-500 h-10 flex flex-col justify-center items-center rounded">
           {{ text }}
        </li>
   </ul>
</template>
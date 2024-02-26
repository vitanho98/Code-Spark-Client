<script setup lang="ts">
defineProps<{
    text: string
}>()
</script>

<template>

    <div class="bg-green-500 z-30 right-32 bottom-3 h-auto w-auto fixed text-md rounded-md px-2 py-3 font-roboto font-bold text-white ">
        <button>
            {{ text }}
        </button>
    </div>

</template>
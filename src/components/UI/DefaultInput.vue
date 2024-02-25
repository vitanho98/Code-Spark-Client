<script setup lang="ts">
defineProps<{
    modelValue: string | number | null
    placeholder: string,
    type: string
}>()

const emit = defineEmits(['update:modelValue'])

const updateValue = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', target.value);
}
</script>

<template>
    <input class="w-full py-2 px-3 text-lg rounded bg-gray-800 pl-4" :type="type" :placeholder="placeholder"
        :value="modelValue" @input="updateValue">
</template>
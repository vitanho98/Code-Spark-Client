<script setup lang="ts">
defineProps<{
    modelValue: string
    placeholder?: string
}>()

const emit = defineEmits<{
    search: [value: string],
    'update:modelValue': [value: string]
}>()

const updateValue = (event: Event) => {
    const target = event.target as HTMLInputElement;

    emit('search', target.value);
    emit('update:modelValue', target.value);
}
</script>

<template>
    <div class="flex items-center gap-2 bg-gray-800 rounded w-full py-2.5">
        <i class="pi pi-search text-gray-300 px-3"></i>
        <input :value="modelValue" @input="updateValue"
            class="text-md px-0.5 bg-gray-800 w-full border-0 outline-none text-gray-300 placeholder:text-gray-300 flex"
            type="text" :placeholder="placeholder">
    </div>
</template>
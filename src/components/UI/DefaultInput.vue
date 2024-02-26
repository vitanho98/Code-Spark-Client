<script setup lang="ts">
defineProps<{
    modelValue: string | number | null | undefined
    placeholder?: string,
    label?: string
    type: string
}>()

const emit = defineEmits(['update:modelValue'])

const updateValue = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', target.value);
}
</script>

<template>
    <div v-if="label" class="flex flex-col gap-2">
        <label class="text-gray-400 font-roboto font-bold" :for="label.toLowerCase().trim().replace(/ /g, '-')">{{ label
        }}</label>

        <input :id="label.toLowerCase().trim().replace(/ /g, '-')"
            class="w-full py-2 px-3 text-lg rounded bg-gray-800 pl-4 placeholder:text-gray-400" :type="type"
            :placeholder="placeholder" :value="modelValue" @input="updateValue">
    </div>

    <input v-else class="w-full py-2 px-3 text-lg rounded bg-gray-800 pl-4 placeholder:text-gray-400" :type="type"
        :placeholder="placeholder" :value="modelValue" @input="updateValue">
</template>
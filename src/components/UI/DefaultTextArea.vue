<script setup lang="ts">
defineProps<{
  modelValue: string
  placeholder: string,
}>()

const emit = defineEmits(['update:modelValue'])

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
}
</script>

<template>
  <textarea class="w-full h-36 resize-none py-2 px-3 text-lg rounded bg-gray-800 pl-4" :placeholder="placeholder"
    :value="modelValue" @input="updateValue" />
</template>
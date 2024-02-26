<script setup lang="ts">
defineProps<{
  modelValue: string | undefined
  label?: string
  placeholder?: string,
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

    <textarea :id="label.toLowerCase().trim().replace(/ /g, '-')"
      class="w-full h-36 resize-none py-2 px-3 text-lg rounded bg-gray-800 pl-4 placeholder:text-gray-400"
      :placeholder="placeholder" :value="modelValue" @input="updateValue" />
  </div>

  <textarea v-else class="w-full h-36 resize-none py-2 px-3 text-lg rounded bg-gray-800 pl-4 placeholder:text-gray-400"
    :placeholder="placeholder" :value="modelValue" @input="updateValue" />
</template>
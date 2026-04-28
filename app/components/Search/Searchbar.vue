<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const localValue = ref(props.modelValue)

// sync external changes
watch(() => props.modelValue, (val) => {
  localValue.value = val
})

// optional debounce (adjust/remove if not needed)
let timeout: ReturnType<typeof setTimeout>
watch(localValue, (val) => {
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    emit('update:modelValue', val)
  }, 200)
})

function clear() {
  localValue.value = ''
  emit('update:modelValue', '')
}
</script>

<template>
  <div class="relative w-full">
    <input
      v-model="localValue"
      type="text"
      :placeholder="$t('Projects.Search')"
      class="w-full mb-6 rounded border bg-bg-surface hover:bg-bg-surfaceHover px-4 py-2 pr-10 text-text-secondary focus:border-text-main focus:outline-none"
      aria-label="Search"
    />

    <!-- Clear button -->
    <button
      v-if="localValue"
      @click="clear"
      type="button"
      class="absolute right-3 top-1/2 -translate-y-6 text-gray-400 hover:text-white"
      aria-label="Clear search"
    >
      ✕
    </button>
  </div>
</template>
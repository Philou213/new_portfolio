<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  label: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  variant: {
    type: String as PropType<'default' | 'muted'>,
    default: 'default',
  },
})
</script>

<template>
  <div
    class="flex-col flex items-center justify-center text-center gap-2 rounded-lg border px-2 py-2 text-sm font-medium transition-colors"
    :class="variant === 'default'
      ? 'border-white/15 bg-zinc-900 text-white hover:bg-zinc-800'
      : 'border-white/10 bg-zinc-900/60 text-gray-300 hover:bg-zinc-800/60'"
  >
    <img
      :src="icon"
      :alt="label"
      class="h-20 w-20"
    />
    <span class="whitespace-nowrap">{{ label }}</span>
  </div>
</template>

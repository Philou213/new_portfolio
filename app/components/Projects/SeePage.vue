<script setup lang="ts">

const { t } = useI18n()

defineProps({
  project_link: {
    type: Object as PropType<any>,
    required: true,
  },
})
</script>

<template>
  <a
    v-if="project_link"
    :href="project_link"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-zinc-900 px-3 py-1.5 text-white font-medium transition-all duration-200 hover:bg-zinc-800 hover:scale-105"
  >
    <Icon
      name="i-heroicons-arrow-right"
      class="text-lg transition-transform duration-200 group-hover:translate-x-1"
    />
    <span class="whitespace-nowrap">{{ t('Projects.Link') }}</span>
</a>
</template>

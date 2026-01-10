<script setup lang="ts">
import type { PropType } from 'vue'

const { locale } = useI18n()
defineProps({
  project: {
    type: Object as PropType<any>,
    required: true,
  },
  project_page: {
    type: Object as PropType<any>,
    required: true,
  }
})

</script>

<template>
  <NuxtLink
    :aria-label="project.title + ' project link'"
    class="group relative flex cursor-pointer flex-col gap-1 rounded-lg border border-white/10 bg-zinc-900/80 p-1 shadow-2xl shadow-zinc-950/50 backdrop-blur-sm"
    :to="`${project_page}`"
  >
    <div class="flex h-56 justify-center overflow-hidden rounded-lg">
      <NuxtImg
        :src="project.meta.image"
        class="h-full rounded-lg object-cover transition-all duration-300 hover:scale-105"
        :alt="project.meta.image"
      />
    </div>

    <div class="absolute bottom-0 flex w-full justify-center">
      <div class="rounded-t-lg border-x border-t border-white/10 px-4 py-[5px] backdrop-blur-md">
        <div class="flex items-center gap-1">
          <Icon
            v-if="project.meta.featured"
            name="i-heroicons-star-solid"
            class="size-5 text-white"
          />
          
          <span class="text-sm font-semibold text-white/90">
            {{ project.title }}
          </span>

          <span class="text-xs text-white/60">
            {{ project.meta.release === 'soon' ? 'Soon…' : project.meta.release }}
          </span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

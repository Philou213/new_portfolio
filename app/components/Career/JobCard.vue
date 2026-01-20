<script setup lang="ts">

defineProps<{
  job: any
}>()
</script>

<template>
  <article
    class="relative flex flex-col rounded-xl border border-white/10 bg-zinc-900 p-6"
  >
    <!-- CENTERED HEADER -->
    <header class="flex flex-col items-center text-center gap-2 mb-6">
      <img
        v-if="job.meta.logo"
        :src="job.meta.logo"
        :alt="job.meta.company"
        class="h-10 w-10 md:h-20 md:w-20 object-contain absolute top-4 left-4"
      />

      <h3 class="text-lg font-semibold">
        {{ job.title }}
      </h3>

      <p class="text-sm text-white/60">
        {{ job.meta.company }} • {{ job.meta.period }}
      </p>
    </header>

    <!-- MARKDOWN CONTENT -->
    <ContentRenderer
      :value="job"
      class="prose prose-invert max-w-none flex-1 mb-10"
    />

    <!-- TECH STACK — BOTTOM LEFT -->
    <footer
      v-if="job.meta.tech"
      class="absolute bottom-4 left-4 flex flex-wrap gap-2"
    >
      <span
        v-for="tech in job.meta.tech"
        :key="tech"
        class="rounded bg-white/5 px-2 py-1 text-xs"
      >
        {{ tech }}
      </span>
    </footer>
  </article>
</template>

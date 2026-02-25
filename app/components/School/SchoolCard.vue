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
        :alt="job.meta.school"
        class="h-10 w-10 md:h-20 md:w-20 object-contain absolute top-4 left-4"
      />

      <h3 class="text-lg font-semibold break-words max-w-[250px] md:max-w-md">
        {{ job.title }}
      </h3>

      <p class="text-sm text-white/60">
        {{ job.meta.school }} • {{ job.meta.period }}
      </p>
    </header>
  </article>
</template>

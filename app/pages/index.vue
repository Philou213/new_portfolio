<script setup lang="ts">
  const { t } = useI18n()
useHead({
  title: 'Philippe St-Laurent-Recoura - Home',
  meta: [
    { name: 'description', content: 'Game developer portfolio showcasing projects, experiments, and technical skills.' },
  ],
})
</script>

<template>
  <main class="mx-auto max-w-4xl px-6 py-24">
    <section class="flex flex-col gap-6 text-center">
      <h1 class="text-4xl font-bold tracking-tight">
        {{ t('welcome') }}
      </h1>

      <p class="text-lg text-gray-500">
        {{ t('description') }}
      </p>
    </section>
  </main>
</template>
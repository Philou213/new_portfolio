<script setup lang="ts">
  const { t } = useI18n()
useHead({
  title: 'Philippe St-Laurent-Recoura - Projects',
  meta: [
    { name: 'description', content: 'Game developer portfolio showcasing projects, experiments, and technical skills.' },
  ],
})
</script>

<template>
  <main class="mx-auto max-w-4xl px-6 py-24">
    <section class="flex flex-col gap-6 text-center">
      <h1>
        {{ t('projects') }}
      </h1>

      <p>
        A list of my game development projects, experiments, and technical showcases.
      </p>
    </section>
  </main>
</template>
<script setup lang="ts">
import ProjectGrid from '~/components/Projects/ProjectGrid.vue';

  const { t } = useI18n()
useHead({
  title: 'Philippe St-Laurent-Recoura - Projects',
  meta: [
    { name: 'description', content: 'Game developer portfolio showcasing projects, experiments, and technical skills.' },
  ],
})
</script>

<template>
  <main>
    <section>
      <h1>
        {{ t('projects') }}
      </h1>

      <p>
        A list of my game development projects, experiments, and technical showcases.
      </p>
      <ProjectGrid></ProjectGrid>
    </section>
  </main>
</template>
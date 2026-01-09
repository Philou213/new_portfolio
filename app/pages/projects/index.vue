<script setup lang="ts">
import ProjectGrid from '~/components/Projects/ProjectGrid.vue';

  const { t } = useI18n()
useHead({
  title: t('Navigation.Projects'),
  meta: [
    { name: 'description', content: 'Game developer portfolio showcasing projects, experiments, and technical skills.' },
  ],
})
</script>

<template>
  <main>
    <section>
      <h1>
        {{ t('Projects.Title') }}
      </h1>

      <h2>
        {{ t('Projects.Subtitle') }}
      </h2>
      <ProjectGrid></ProjectGrid>
    </section>
  </main>
</template>
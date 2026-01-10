<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'

const { locale } = useI18n()
const { data: projects } = await useAsyncData(
  'projects',
  () =>
    queryCollection('projects')
      .where('path', 'LIKE', `/projects/%/${locale.value}`)
      .all(),
      { watch: [locale] }
)


function projectPage(path: string) {
  // remove trailing /en or /fr from content path
  const basePath = path.replace(/\/(en|fr)$/, '')

  // prefix only if french
  return locale.value === 'fr'
    ? `/fr${basePath}`
    : basePath
}
</script>

<template>
  <div v-if="projects" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <ProjectCard
      v-for="project in projects"
      :key="project.path"
      :project_page="projectPage(project.path)"
      :project="project"
    />
  </div>
</template>

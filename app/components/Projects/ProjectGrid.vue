<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'

const { locale } = useI18n()

const { data: projects } = await useAsyncData(
  'projects',
  async () => {
    const projects = await queryCollection('projects')
      .where('path', 'LIKE', `/projects/%/${locale.value}`)
      .all()

    const getReleaseOrder = (release: unknown) => {
      if (release === 'En développement' || release === 'In development') return Number.POSITIVE_INFINITY
      if (release === 'Abandonné') return Number.NEGATIVE_INFINITY
      return Number(release) || 0
    }

    return projects.sort(
      (a, b) => getReleaseOrder(b.meta.release) - getReleaseOrder(a.meta.release)
    )
  },
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
  <div v-if="projects" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
    <ProjectCard
      v-for="project in projects"
      :key="project.path"
      :project_page="projectPage(project.path)"
      :project="project"
    />
  </div>
</template>

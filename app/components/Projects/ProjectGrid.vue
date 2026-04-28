<script setup lang="ts">
import Searchbar from '../Search/Searchbar.vue'
import TagDropdown from '../Search/TagDropdown.vue'
import ProjectCard from './ProjectCard.vue'

const { locale } = useI18n()

// Sort and filter
const { data: projects, pending } = await useAsyncData(
  'projects',
  async () => {
    const projects = await queryCollection('projects')
      .where('path', 'LIKE', `/projects/%/${locale.value}`)
      .all()

    const getReleaseOrder = (release: unknown) => {
      if (release === 'En développement' || release === 'In development') return Number.POSITIVE_INFINITY
      if (release === 'En pause' || release === 'On hold') return Number.NEGATIVE_INFINITY
      
        const time = Date.parse(String(release))
        return isNaN(time) ? 0 : time
    }

    return projects.sort(
      (a, b) => getReleaseOrder(b.meta.release) - getReleaseOrder(a.meta.release)
    )
  },
  { watch: [locale],
    lazy: false,
    default: () => [],
    immediate : true
   }
) 

// Searchbar
const filteredProjects = computed(() => {
  if (!projects.value) return []

  return projects.value.filter(p => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.value.trim().toLowerCase())

    const matchesTags =
      tags.value.length === 0 ||
      (() => {
        const projectTags = Array.isArray(p.meta.tags) ? p.meta.tags : []
        return tags.value.every(tag => projectTags.includes(tag))
      })()

    return matchesSearch && matchesTags
    }
  )
})


function projectPage(path: string) {
  // remove trailing /en or /fr from content path
  const basePath = path.replace(/\/(en|fr)$/, '')

  // prefix only if french
  return locale.value === 'fr'
    ? `/fr${basePath}`
    : basePath
}

const search = ref('')
const tags = ref<string[]>([])

</script>

<template>
  <div class="flex gap-4">
    <div class="w-3/5">
      <Searchbar v-model="search" />
    </div>

    <div class="w-2/5">
      <TagDropdown v-model="tags" />
    </div>
  </div>
  <div v-if="projects" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
    <ProjectCard
      v-for="project in filteredProjects"
      :key="project.path"
      :project_page="projectPage(project.path)"
      :project="project"
    />
  </div>
</template>

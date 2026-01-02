<script setup lang="ts">
const { locale } = useI18n()

const { data: project } = await useAsyncData(
  () =>
    queryCollection('projects')
      .path(`/projects/${useRoute().params.slug}/${locale.value}`)
      .first(),
  { watch: [locale] }
)
useSeoMeta({
  title: project.value?.title,
  description: project.value?.description
})
</script>

<template>
  <ContentRenderer v-if="project" :value="project" />
  <div v-else>Project not found</div>
</template>

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
  <template v-if="project">
    <ContentRenderer :value="project" />
  </template>
  <template v-else>
    <main class="mx-auto max-w-4xl px-6 py-24">
      <section class="flex flex-col gap-6 text-center">
        <h1>
          Project does not exist
        </h1>

        <p class="text-lg text-gray-500">
          test
        </p>
      </section>
    </main>
  </template>
</template>

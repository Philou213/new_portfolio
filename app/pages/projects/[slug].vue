<script setup lang="ts">
import SeePage from '~/components/Projects/SeePage.vue';

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
    <main>
      <section>
        <ContentRenderer :value="project" class="prose prose-neutral [&_h2]:mb-10"/>

        <SeePage
        :project_link="project.meta.link"
        />
      </section>
    </main>
  </template>
  <template v-else>
    <main>
      <section>
        <h1>
          Project does not exist
        </h1>
      </section>
    </main>
  </template>
</template>

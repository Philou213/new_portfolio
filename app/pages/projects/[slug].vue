<script setup lang="ts">
import SeeCode from '~/components/Projects/SeeCode.vue';
import SeePage from '~/components/Projects/SeePage.vue';

const { locale, t } = useI18n()

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
  <main class="flex flex-col gap-12">
    
    <!-- Hero Image -->
    <div class="flex w-full justify-center">
      <NuxtImg
        :src="project.meta.image"
        :alt="project.meta.title"
        class="w-[50vh] rounded-xl object-cover"
      />
    </div>

    <!-- Title and Description -->
    <section class="mx-auto w-full max-w-4xl flex flex-col gap-4">
      <h1 class="text-4xl font-bold text-white">{{ project.title }}</h1>
      <h2 class="text-xl text-gray-300">{{ project.description }}</h2>
    </section>

      <!-- SeePage Component -->
    <section class="mx-auto w-1/4 max-w-2xl flex flex-row gap-4 justify-center">
      <div class="flex-1" v-if="project.meta.link">
        <SeePage :project_link="project.meta.link" />
      </div>
      <div class="flex-1" v-if="project.meta.code">
        <SeeCode :code_link="project.meta.code" />
      </div>
    </section>


    <!-- Role & Context Side by Side -->
    <section class="mx-auto w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
        <h3 class="text-lg font-semibold text-white">Role</h3>
        <p class="text-gray-300">{{ project.meta.role }}</p>
      </div>
      <div>
        <h3 class="text-lg font-semibold text-white">Context</h3>
        <p class="text-gray-300">{{ project.meta.context }}</p>
      </div>
    </section>

    <!-- Markdown Content -->
    <section class="mx-auto w-full max-w-4xl">
      <ContentRenderer
        :value="project"
        class="prose prose-neutral [&_h2]:mb-10"
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

<script setup lang="ts">

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
  <div class="flex w-full flex-col gap-6">
    <h3 class="font-newsreader italic text-white-shadow text-xl text-left">
      {{ $t('Index.Projects') }}
    </h3>

    <div class="flex w-full flex-col gap-4 p-2">
      <NuxtLink
        v-for="project in projects?.filter(p => p.meta.featured)"
        :key="project.path"
        :to="projectPage(project.path)"
        class="flex items-center gap-2 rounded-lg px-4 py-2 hover:bg-bg-surfaceHover hover:text-hover"
        :aria-label="'go to ' + project.title + ' project page'"
      >

        <span class="whitespace-nowrap">
          {{ project.title }}
        </span>

        <div class="mx-2 h-[0.1px] w-full bg-muted" />

        <span class="whitespace-nowrap text-muted">
          {{ project.meta.release === 'soon'
            ? $t('global.soon') + '...'
            : project.meta.release
          }}
        </span>
      </NuxtLink>
    </div>

    <NuxtLink
      :to="locale === 'fr' ? '/fr/projects' : '/projects'"
      class="font-newsreader italic text-white-shadow cursor-pointer text-sm"
    >
      {{ $t('Index.See_More') }}
    </NuxtLink>
  </div>
</template>

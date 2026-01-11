<script setup lang="ts">
import Projects from '~/components/Home/Projects.vue';
import Social from '~/components/Home/Social.vue';

  const { t } = useI18n()
useHead({
  title: t('Navigation.Index'),
  meta: [
    { name: 'description', content: 'Game developer portfolio showcasing projects, experiments, and technical skills.' },
  ],
})
</script>

<template>
  <main class="flex flex-col gap-12">
    <section class="flex flex-col items-center gap-6">
      <h1 class="m-0">
        {{ t('Index.Title') }}
      </h1>
      <Social />
    </section>

    <section>
      <p class="preserve">
        {{ t('Index.Main') }}
      </p>
    </section>

    <section class="mt-10 items-center">
      <Projects />
    </section>
  </main>
</template>

<script setup lang="ts">
  const { t } = useI18n()
useHead({
  title: t('Navigation.Index'),
  meta: [
    { name: 'description', content: 'Game developer portfolio showcasing projects, experiments, and technical skills.' },
  ],
})
</script>

<template>
  <main>
    <section>
      <h1>
        {{ t('Index.Title') }}
      </h1>
      <p>
        {{ t('Index.Main') }}
      </p>
    </section>
  </main>
</template>
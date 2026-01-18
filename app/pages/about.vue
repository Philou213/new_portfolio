<script setup lang="ts">
import Languages from '~/components/Skill/Languages.vue';
import Software from '~/components/Skill/Software.vue';

 const { t, locale } = useI18n()

const { data: about } = await useAsyncData(
  () => `about-${locale.value}`,
  () =>
    queryCollection('about')
      .where('path', 'LIKE', `/about/${locale.value}`)
      .first(),
  {
    watch: [locale],
  }
)

useHead({
  title: t('Navigation.About'),
  meta: [
    { name: 'description', content: 'Game developer portfolio showcasing projects, experiments, and technical skills.' },
  ],
})
</script>

<template>
  <main>
    <section>
      <h1>
        {{ t('About.Title') }}
      </h1>
      <ContentRenderer  v-if="about" :value="about" class="prose prose-neutral [&_p]:mb-6 max-w-none [&_h2]:mt-8 [&_h3]:mt-4 text-left"/>
    </section>
    <section>
        <Languages></Languages>
    </section>
    <section class="pt-5">
        <Software></Software>
    </section>
  </main>
</template>
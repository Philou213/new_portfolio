<script setup lang="ts">
import SchoolCard from './SchoolCard.vue';

const {t, locale} = useI18n()

const { data: educations } = await useAsyncData(
  'educations',
  async () => {
    const educations = await queryCollection('educations')
      .where('path', 'LIKE', `/%/${locale.value}`)
      .all()

      const getReleaseOrder = (release: unknown) => {
      return Number(release) || 0
    }

    return educations.sort(
      (a, b) => getReleaseOrder(b.meta.order) - getReleaseOrder(a.meta.order)
    )
  },
  { watch: [locale] }
)
</script>

<template>
  <div>
    <h2 class="text-left m-2 mb-4">{{t('School') }}</h2>
    <SchoolCard
      class="m-5"
      v-for="education in educations"
      :key="education.meta.school + education.title"
      :job="education"
    />
  </div>
</template>

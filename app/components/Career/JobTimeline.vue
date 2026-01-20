<script setup lang="ts">
import JobCard from './JobCard.vue';

const {t, locale} = useI18n()

const { data: experiences } = await useAsyncData(
  'experiences',
  async () => {
    const experiences = await queryCollection('experiences')
      .where('path', 'LIKE', `/%/${locale.value}`)
      .all()

      const getReleaseOrder = (release: unknown) => {
      return Number(release) || 0
    }

    return experiences.sort(
      (a, b) => getReleaseOrder(b.meta.order) - getReleaseOrder(a.meta.order)
    )
  },
  { watch: [locale] }
)
</script>

<template>
  <div>
    <h2 class="text-left m-2 mb-4">{{t('Experiences') }}</h2>
    <JobCard
      class="m-5"
      v-for="exp in experiences"
      :key="exp.meta.company + exp.title"
      :job="exp"
    />
  </div>
</template>

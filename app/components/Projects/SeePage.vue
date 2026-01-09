<script setup lang="ts">

defineProps({
  project_link: {
    type: Object as PropType<any>,
    required: true,
  },
})
</script>

<template>
    <NuxtLink
      v-if="project_link"
      :to="project_link"
    >
      <Icon name="i-heroicons-star-solid" class="text-2xl hover:text-[1.7rem] transition-all" />
      Project
    </NuxtLink>
</template>

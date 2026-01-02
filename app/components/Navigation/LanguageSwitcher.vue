<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
</script>

<template>
  <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
    <Icon :name="locale.icon" class="text-2xl hover:text-[1.7rem] transition-all" />
  </NuxtLink>
</template>

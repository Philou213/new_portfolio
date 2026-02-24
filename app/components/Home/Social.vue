<script setup lang="ts">
type Social = {
  name: string
  url: string
  icon: string
}

const { locale } = useI18n()

const cvPath = computed(() => {
  return locale.value === 'fr'
    ? '/assets/CVFrançais.pdf'
    : '/assets/CVEnglish.pdf'
})

const socials: Social[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/philou213',
    icon: 'i-simple-icons-github',
  },
  {
    name: 'Itch.io',
    url: 'https://philou213.itch.io/',
    icon: 'i-simple-icons-itchdotio',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/philippe-st-laurent-recoura-9bb40224a/',
    icon: 'i-simple-icons-linkedin',
  },
  {
    name: 'Email',
    url: 'mailto:philippestlr@gmail.com',
    icon: 'i-simple-icons-maildotru',
  }
]
</script>

<template>
  <div class="my-7 flex items-center justify-center gap-4 sm:gap-6">
    <!-- Social icon buttons -->
    <NuxtLink
      v-for="social in socials"
      :key="social.name"
      :to="social.url"
      target="_blank"
      rel="noopener"
      class="group flex size-10 items-center justify-center rounded-full border border-white/10 bg-surface transition-all duration-200 hover:bg-surface-hover hover:border-white/20"
      :aria-label="`Go to ${social.name}`"
    >
      <Icon
        :name="social.icon"
        class="size-5 text-muted transition-colors duration-200 group-hover:text-main"
      />
    </NuxtLink>

    <!-- CV button -->
    <a
      :href="cvPath" target="_blank"
      download
      class="flex items-center gap-2 rounded-lg border border-white/10 bg-surface px-4 py-2 text-sm text-muted transition-all duration-200 hover:bg-surface-hover hover:text-main"
    >
      {{ $t('Index.CV') }}
    </a>
  </div>
</template>

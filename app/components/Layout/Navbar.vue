<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useNavigation } from '~/composables/useNavigation'

const route = useRoute()
const navigation = useNavigation()
</script>

<template>
  <nav class="fixed top-6 left-1/2 z-50 -translate-x-1/2">
    <div
      class="flex items-center gap-2 rounded-full border border-white/20 bg-zinc-950/70 p-1 backdrop-blur"
    >
      <NuxtLink
        v-for="item in navigation"
        :key="item.name"
        :to="item.to"
        class="flex h-11 w-11 items-center justify-center rounded-full transition"
        :class="route.path === item.to
          ? 'bg-white/10 text-white'
          : 'text-white/40 hover:bg-white/5 hover:text-white'"
      >
        <Icon :name="item.icon" class="text-xl" />
      </NuxtLink>
    </div>
  </nav>
</template>

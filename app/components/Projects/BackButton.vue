<script setup lang="ts">
const router = useRouter()

function goBack() {
  router.back()
}
</script>

<template>
  <button
    @click="goBack"
    class="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-zinc-900 px-3 py-1.5 text-white font-medium transition-all duration-200 hover:bg-zinc-800 hover:scale-105"
  >
    <Icon
      name="i-heroicons-arrow-left"
      class="text-lg"
    />
    <span>Retour</span>
  </button>
</template>

<script setup lang="ts">
</script>

<template>
  <nav class="fixed top-6 left-1/2 z-50 -translate-x-1/2">
    <div
      class="flex items-center gap-2 rounded-full border border-white/20 bg-zinc-950/70 p-1 backdrop-blur min-w-[210px] min-h-[64px]"
    >
      <NavigationBar />
      <div class="p-2 pt-3 border-l border-white/20">
        <LanguageSwitcher/>
      </div>
    </div>
  </nav>
</template>

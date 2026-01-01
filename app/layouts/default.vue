<script setup lang="ts">
</script>

<template>
  <div class="relative min-h-screen w-full bg-black overflow-hidden text-emerald-400 font-sans">
    <!-- Background pattern -->
      <div
      class="absolute inset-0 z-0"
      style="background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34, 197, 94, 0.25), transparent 70%), #000000;"
    />
    <!-- Foreground content -->
    <div class="relative z-10 flex min-h-screen flex-col">
      <LayoutNavbar />
      <main class="flex-1">
        <slot />
      </main>
      <LayoutFooter />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useNavigation } from '~/composables/useNavigation'

const localePath = useLocalePath()
const route = useRoute()
const navigation = useNavigation()

</script>

<template>
    <NuxtLink
        v-for="item in navigation"
        :key="item.name"
        :to="localePath(item.to)"
        class="flex h-11 w-11 items-center justify-center rounded-full transition"
        :class="route.path === item.to
          ? 'bg-white/10 text-white'
          : 'text-white/40 hover:bg-white/5 hover:text-white'"
      >
        <Icon :name="item.icon" class="text-xl" />
    </NuxtLink>
</template>

<script setup lang="ts">
import { ref, watch, computed, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import { projectTags } from '~/../content/tags'

const { t } = useI18n()

const props = defineProps<{
  modelValue: string[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string[]): void
}>()

const isOpen = ref(false)
const selectedTags = ref<string[]>([...props.modelValue])
const root = ref<HTMLElement | null>(null)

// sync with parent
watch(
  () => props.modelValue,
  (val) => {
    selectedTags.value = [...val]
  }
)

function toggleDropdown() {
  isOpen.value = !isOpen.value
}

function toggleTag(tag: string) {
  if (selectedTags.value.includes(tag)) {
    selectedTags.value = selectedTags.value.filter(t => t !== tag)
  } else {
    selectedTags.value.push(tag)
  }
  emit('update:modelValue', selectedTags.value)
}

// close on outside click
function handleClickOutside(e: MouseEvent) {
  if (root.value && !root.value.contains(e.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => window.addEventListener('click', handleClickOutside))
onBeforeUnmount(() => window.removeEventListener('click', handleClickOutside))

// sorted + localized
const sortedTags = computed(() =>
  [...projectTags].sort((a, b) =>
    t(`tags.${a}`).localeCompare(t(`tags.${b}`))
  )
)

// label
const label = computed(() => {
  if (selectedTags.value.length === 0) {
    return t('Projects.Tags')
  }

  return selectedTags.value
    .map(tag => t(`tags.${tag}`))
    .join(', ')
})
</script>

<template>
  <div ref="root" class="relative w-full">
    <!-- Button -->
    <button
      @click="toggleDropdown"
      class="w-full rounded border bg-bg-surface px-4 py-2 text-text-secondary text-left hover:bg-bg-surfaceHover transition"
    >
      {{ label }}
    </button>

    <!-- Dropdown -->
    <div
      v-if="isOpen"
      class="absolute z-10 mt-2 w-full rounded-lg border border-border bg-bg-elevated shadow-lg max-h-60 overflow-auto"
    >
      <div
        v-for="tag in sortedTags"
        :key="tag"
        class="flex items-center gap-2 px-4 py-2 cursor-pointer transition hover:bg-bg-surfaceHover"
        @click="toggleTag(tag)"
      >
        <input
          type="checkbox"
          :checked="selectedTags.includes(tag)"
          class="accent-main"
          @change.stop
        />
        <span class="text-text-secondary">
          {{ $t(`tags.${tag}`) }}
        </span>
      </div>
    </div>
  </div>
</template>
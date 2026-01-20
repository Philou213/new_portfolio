<script setup lang="ts">
import Skillbox from './skillbox.vue';

 const { t } = useI18n()

type Skill = {
  label: string
  icon: string
}

const skills : Skill[]= [
    { label : 'Unreal', icon: '/icons/languages/unreal.svg'},
    { label : 'Unity', icon: '/icons/languages/unity.svg'},
    { label : 'Godot', icon: '/icons/languages/godot.svg'},
    { label : 'Android Studio', icon: '/icons/languages/android.svg'},
    { label : 'Flutter', icon: '/icons/languages/flutter.svg'},
    { label : 'Vue', icon: '/icons/languages/vue.svg'},
    { label : 'React', icon: '/icons/languages/react.svg'},
    { label : 'Angular', icon: '/icons/languages/angular.svg'},
    { label : 'Perforce', icon: '/icons/languages/perforce.svg'},
    { label : 'Git', icon: '/icons/languages/git.svg'},
]
</script>

<template>
    <h2 class="text-left m-2 mb-0">{{ t('Software') }}</h2>
        <div class="grid grid-cols-3 md:grid-cols-5 gap-3">
            <Skillbox
            v-for="skill in skills"
            :key="skill.label"
            :label="skill.label"
            :icon="skill.icon"
        />
  </div>
</template>

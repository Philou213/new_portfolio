<script setup lang="ts">
import Skillbox from './skillbox.vue';

 const { t } = useI18n()

type Skill = {
  label: string
  icon: string
}

const skills : Skill[]= [
    { label : 'C++', icon: '/icons/languages/c++.svg'},
    { label : 'C#', icon: '/icons/languages/csharp.svg'},
    { label : 'Java', icon: '/icons/languages/java.svg'},
    { label : 'HTML', icon: '/icons/languages/html.svg'},
    { label : 'CSS', icon: '/icons/languages/css.svg'},
    { label : 'Javascript', icon: '/icons/languages/js.svg'},
    { label : 'Typescript', icon: '/icons/languages/ts.svg'},
    { label : 'PHP', icon: '/icons/languages/php.svg'},
    { label : 'Python', icon: '/icons/languages/python.svg'},
    { label : 'Dart', icon: '/icons/languages/dart.svg'},
    { label : 'GDScript', icon: '/icons/languages/godot.svg'},
]
</script>

<template>
    <h2 class="text-left m-2 mb-0">{{ t('Languages') }}</h2>
        <div class="grid grid-cols-5 gap-3">
            <Skillbox
            v-for="skill in skills"
            :key="skill.label"
            :label="skill.label"
            :icon="skill.icon"
        />
  </div>
</template>

import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: 'page',
      source: 'projects/**'
    }),
    about: defineCollection({
      type: 'page',
      source: 'about/**'
    }),
    experiences : defineCollection({
      type: 'page',
      source: 'career/**'
    }),
    educations : defineCollection({
      type: 'page',
      source: 'school/**'
    })
  }
})

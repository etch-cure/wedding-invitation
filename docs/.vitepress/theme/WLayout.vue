<script setup lang="ts">
import { useData } from 'vitepress'
import WTestComp from './components/WTestComp.vue'

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
</script>

<template>
  <div v-if="frontmatter.wedding">
    <WTestComp></WTestComp>
    <div>
      {{ frontmatter }}
    </div>
  </div>
  <div v-else>
    <a href="/">Home</a>
    <Content />
  </div>
</template>

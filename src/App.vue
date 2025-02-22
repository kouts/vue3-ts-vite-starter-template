<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script setup lang="ts">
import '@/css/app.css'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const layout = computed(() => `layout-${route.meta.layout || 'default'}`)
</script>

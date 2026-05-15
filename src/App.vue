<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script setup lang="ts">
import '@/css/app.css'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { DEFAULT_LAYOUT, layoutRegistry, resolveLayout } from '@/layouts/registry'

defineOptions({
  name: 'App',
})

const route = useRoute()
const layout = computed(() => {
  const layoutKey =
    typeof route.meta.layout === 'string' && route.meta.layout in layoutRegistry ? route.meta.layout : DEFAULT_LAYOUT

  return resolveLayout(layoutKey)
})
</script>

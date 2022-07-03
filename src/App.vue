<template>
  <div>
    {{ layout }}
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import '@/scss/app.scss'

const route = useRoute()
const layout = computed(() => `layout-${route.meta.layout || 'default'}`)
</script>

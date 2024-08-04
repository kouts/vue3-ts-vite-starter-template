<template>
  <div class="min-h-screen pt-24 text-slate-700">
    <DefaultNav />
    <slot />
    <DefaultFooter />
  </div>
</template>

<script setup lang="ts">
import DefaultFooter from './DefaultFooter.vue'
import DefaultNav from './DefaultNav.vue'
</script>

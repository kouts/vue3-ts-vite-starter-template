<template>
  <div class="min-h-screen pt-24 text-slate-700">
    <default-nav />
    <slot />
    <default-footer />
  </div>
</template>

<script setup lang="ts">
import DefaultFooter from './DefaultFooter.vue'
import DefaultNav from './DefaultNav.vue'
</script>

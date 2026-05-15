<template>
  <div class="flex min-h-screen items-center justify-center flex-col px-4 text-slate-700">
    <p>This page is intentionally empty to showcase the empty layout.</p>
    <RouterLink to="/" class="text-emerald-500 no-underline hover:text-emerald-600 mt-4">Return to home</RouterLink>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Empty',
})
</script>

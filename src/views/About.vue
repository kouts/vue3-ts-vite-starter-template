<template>
  <div class="mx-auto max-w-7xl px-4 pt-8 text-center text-slate-700">
    <h1 class="text-4xl font-medium">This is the about page</h1>
    <RouterLink to="/" class="mt-4 inline-block text-emerald-500 no-underline hover:text-emerald-600">
      Return to home
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'About',
})
</script>

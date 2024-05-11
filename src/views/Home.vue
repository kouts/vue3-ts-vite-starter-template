<template>
  <div class="mx-auto max-w-screen-xl px-4">
    <div class="flex justify-center">
      <div alt="Vue logo" class="h-52 w-52 bg-[url('@/assets/logo.svg')] bg-no-repeat" />
    </div>
    <hello-world msg="Welcome to Vue.js 3 Vite starter template" class="mt-2" />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'

defineOptions({
  name: 'Home'
})
</script>

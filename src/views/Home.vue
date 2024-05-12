<template>
  <div class="mx-auto max-w-screen-xl px-4">
    <div class="flex justify-center">
      <div alt="Vue logo" class="mt-8 h-52 w-52 bg-[url('@/assets/logo.svg')] bg-no-repeat" />
    </div>
    <hello-world msg="Vue.js 3 starter template" class="mt-2" />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'

defineOptions({
  name: 'Home'
})
</script>

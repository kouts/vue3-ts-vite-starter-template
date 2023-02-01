<template>
  <div class="container">
    <div class="text-center">
      <img alt="Vue logo" src="@/assets/logo.png" class="text-center" />
    </div>
    <hello-world msg="Welcome to Vue.js 3 Vite starter template" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'Home'
}
</script>

<script setup lang="ts">
// https://github.com/vuejs/eslint-plugin-vue/issues/1577
// eslint-disable-next-line import/first
import HelloWorld from '@/components/HelloWorld.vue'
</script>

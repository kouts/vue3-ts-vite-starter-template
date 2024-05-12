<template>
  <div class="flex-col text-center">
    <h1 class="msg text-4xl font-medium">{{ msg }}</h1>
    <p class="mt-4">
      A project setup using Vite, created to easily scaffold new Vue.js 3 projects.
      <br />
      Find out more at
      <a class="text-emerald-500 hover:text-emerald-600" href="https://vitejs.dev/guide/" target="_blank" rel="noopener"
        >Vite documentation</a
      >
      .
    </p>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'HelloWorld'
})

defineProps({
  msg: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
h1.msg {
  color: $slate-700;
}
</style>

<template>
  <div class="flex-col text-center">
    <h1 class="msg text-4xl font-medium">{{ msg }}</h1>
    <p class="mt-4">
      A project setup using vue-cli, created to easily scaffold new Vue.js projects.
      <br />
      Find out more at
      <a class="custom" href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>
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
  color: $gray-900;
}
</style>

<template>
  <div class="flex-col text-center">
    <h1 class="msg text-4xl font-medium">{{ msg }}</h1>
    <p class="mt-4">
      A project setup using Vite, created to easily scaffold new Vue.js 3 projects.
      <br />
    </p>

    <p>
      Find out more at<a
        class="text-emerald-500 hover:text-emerald-600"
        href="https://vitejs.dev/guide/"
        target="_blank"
        rel="noopener"
      >
        Vite documentation</a
      >.
    </p>

    <p class="mt-8">Counter: {{ counter }} (double: {{ doubleCount }})</p>
    <button
      type="button"
      class="mt-2 rounded bg-emerald-500 px-3 py-2 cursor-pointer text-sm text-white hover:bg-emerald-600"
      @click="counterStore.increment"
    >
      Increment
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCounterStore } from '@/stores/counter'

defineOptions({
  name: 'HelloWorld',
})

defineProps({
  msg: {
    type: String,
    default: '',
  },
})

const counterStore = useCounterStore()
const counter = computed(() => counterStore.counter)
const doubleCount = computed(() => counterStore.doubleCount)
</script>

<style lang="scss" scoped>
h1.msg {
  color: $slate-700;
}
</style>

import { defineStore } from 'pinia'

type State = {
  counter: number
}

export const useCounterStore = defineStore('counter', {
  state: (): State => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++
    },
  },
})

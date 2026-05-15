import { createCounterState } from '@tests/factories/counter'
import { createPinia, setActivePinia } from 'pinia'
import { useCounterStore } from '@/stores/counter'

describe('useCounterStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('increments counter and computes doubleCount', () => {
    const store = useCounterStore()
    const initialState = createCounterState({ counter: 2 })

    store.$patch(initialState)
    store.increment()

    expect(store.counter).toBe(3)
    expect(store.doubleCount).toBe(6)
  })
})
